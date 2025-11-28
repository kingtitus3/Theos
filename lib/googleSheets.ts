import { google } from "googleapis";

// Get Google Sheets client using the same auth method as Google Calendar
// Uses Application Default Credentials (gcloud auth application-default login)
function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  
  if (!spreadsheetId) {
    return null;
  }

  // Use Application Default Credentials (same as Google Calendar)
  // This works with: gcloud auth application-default login
  const auth = new google.auth.GoogleAuth({
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/calendar", // Include calendar scope
    ],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

export interface GiveawayEntry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  partnerName?: string;
  preferredDate?: string;
  instagramHandle?: string;
  tiktokHandle?: string;
  howDidYouHear?: string;
  timestamp: string;
}

export interface NewsletterEntry {
  email: string;
  discountCode: string;
  timestamp: string;
}

export async function appendNewsletterEmail(entry: NewsletterEntry): Promise<void> {
  const client = getSheetsClient();
  
  if (!client) {
    console.warn("Google Sheets not configured. Newsletter email will only be sent via email.");
    return;
  }

  try {
    // Try Newsletter tab first, fall back to Sheet2 if it doesn't exist
    try {
      await client.sheets.spreadsheets.values.append({
        spreadsheetId: client.spreadsheetId,
        range: "Newsletter!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            entry.email,
            entry.discountCode,
            entry.timestamp,
          ]],
        },
      });
      console.log("Newsletter email added to Google Sheets (Newsletter tab)");
    } catch (newsletterError) {
      // Fall back to Sheet2 if Newsletter tab doesn't exist
      await client.sheets.spreadsheets.values.append({
        spreadsheetId: client.spreadsheetId,
        range: "Sheet2!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            entry.email,
            entry.discountCode,
            entry.timestamp,
          ]],
        },
      });
      console.log("Newsletter email added to Google Sheets (Sheet2)");
    }
  } catch (error) {
    console.error("Error adding newsletter email to Google Sheets:", error);
    // Don't throw - we still want emails to send even if Sheets fails
  }
}

export async function appendGiveawayEntry(entry: GiveawayEntry): Promise<void> {
  const client = getSheetsClient();
  
  if (!client) {
    console.warn("Google Sheets not configured. Entry will only be sent via email.");
    return;
  }

  try {
    // Append row to the sheet
    // Try "Entries" tab first (the one we created), fall back to Sheet1
    try {
      await client.sheets.spreadsheets.values.append({
        spreadsheetId: client.spreadsheetId,
        range: "Entries!A:I",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            `${entry.firstName} ${entry.lastName}`,
            entry.email,
            entry.phone,
            entry.partnerName || "",
            entry.preferredDate || "",
            entry.instagramHandle || "",
            entry.tiktokHandle || "",
            entry.howDidYouHear || "",
            entry.timestamp,
          ]],
        },
      });
      console.log("✅ Giveaway entry added to Google Sheets (Entries tab)");
    } catch (entriesError) {
      console.warn("Entries tab failed, trying Sheet1:", entriesError);
      // Fall back to Sheet1 if Entries tab doesn't exist
      await client.sheets.spreadsheets.values.append({
        spreadsheetId: client.spreadsheetId,
        range: "Sheet1!A:I",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            `${entry.firstName} ${entry.lastName}`,
            entry.email,
            entry.phone,
            entry.partnerName || "",
            entry.preferredDate || "",
            entry.instagramHandle || "",
            entry.tiktokHandle || "",
            entry.howDidYouHear || "",
            entry.timestamp,
          ]],
        },
      });
      console.log("✅ Giveaway entry added to Google Sheets (Sheet1)");
    }
  } catch (error) {
    console.error("❌ Error adding entry to Google Sheets:", error);
    // Don't throw - we still want emails to send even if Sheets fails
  }
}


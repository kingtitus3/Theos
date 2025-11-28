import { google } from "googleapis";

// Get Google Sheets client using the same auth method as Google Calendar
// Uses OAuth2 with refresh token (for Vercel) or Application Default Credentials (for local)
function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();
  
  if (!spreadsheetId) {
    return null;
  }

  // Try OAuth2 with refresh token first (works on Vercel)
  let auth: any = null;
  
  if (oauthClientId && oauthClientSecret && oauthRefreshToken) {
    try {
      const oauth2Client = new google.auth.OAuth2(oauthClientId, oauthClientSecret, "http://localhost");
      oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });
      auth = oauth2Client;
    } catch (error) {
      console.warn("OAuth2 setup failed for Sheets, falling back to Application Default Credentials:", error);
    }
  }

  // Fall back to Application Default Credentials (works with gcloud auth application-default login)
  if (!auth) {
    auth = new google.auth.GoogleAuth({
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/calendar",
      ],
    });
  }

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
    console.error("❌ Google Sheets not configured. GOOGLE_SHEETS_ID is missing.");
    return;
  }

  console.log(`📊 Attempting to add newsletter entry to Google Sheets: ${entry.email}`);

  try {
    // Try Newsletter tab first, fall back to Sheet2 if it doesn't exist
    try {
      const result = await client.sheets.spreadsheets.values.append({
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
      console.log("✅ Newsletter email added to Google Sheets (Newsletter tab)");
      console.log("   Updated range:", result.data.updates?.updatedRange);
      return;
    } catch (newsletterError: any) {
      console.warn("⚠️ Newsletter tab failed, trying Sheet2:", newsletterError.message);
      if (newsletterError.response?.data) {
        console.error("   Error details:", JSON.stringify(newsletterError.response.data, null, 2));
      }
      
      // Fall back to Sheet2 if Newsletter tab doesn't exist
      try {
        const result = await client.sheets.spreadsheets.values.append({
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
        console.log("✅ Newsletter email added to Google Sheets (Sheet2)");
        console.log("   Updated range:", result.data.updates?.updatedRange);
        return;
      } catch (sheet2Error: any) {
        console.error("❌ Sheet2 also failed:", sheet2Error.message);
        if (sheet2Error.response?.data) {
          console.error("   Error details:", JSON.stringify(sheet2Error.response.data, null, 2));
        }
        throw sheet2Error;
      }
    }
  } catch (error: any) {
    console.error("❌ Error adding newsletter email to Google Sheets:", error.message);
    if (error.response?.data) {
      console.error("   Full error response:", JSON.stringify(error.response.data, null, 2));
    }
    if (error.code) {
      console.error("   Error code:", error.code);
    }
    // Don't throw - we still want emails to send even if Sheets fails
  }
}

export async function appendGiveawayEntry(entry: GiveawayEntry): Promise<void> {
  const client = getSheetsClient();
  
  if (!client) {
    console.error("❌ Google Sheets not configured. GOOGLE_SHEETS_ID is missing.");
    return;
  }

  console.log(`📊 Attempting to add giveaway entry to Google Sheets: ${entry.email}`);

  try {
    // Append row to the sheet
    // Try "Entries" tab first (the one we created), fall back to Sheet1
    try {
      const result = await client.sheets.spreadsheets.values.append({
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
      console.log("   Updated range:", result.data.updates?.updatedRange);
      return;
    } catch (entriesError: any) {
      console.warn("⚠️ Entries tab failed, trying Sheet1:", entriesError.message);
      if (entriesError.response?.data) {
        console.error("   Error details:", JSON.stringify(entriesError.response.data, null, 2));
      }
      
      // Fall back to Sheet1 if Entries tab doesn't exist
      try {
        const result = await client.sheets.spreadsheets.values.append({
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
        console.log("   Updated range:", result.data.updates?.updatedRange);
        return;
      } catch (sheet1Error: any) {
        console.error("❌ Sheet1 also failed:", sheet1Error.message);
        if (sheet1Error.response?.data) {
          console.error("   Error details:", JSON.stringify(sheet1Error.response.data, null, 2));
        }
        throw sheet1Error;
      }
    }
  } catch (error: any) {
    console.error("❌ Error adding entry to Google Sheets:", error.message);
    if (error.response?.data) {
      console.error("   Full error response:", JSON.stringify(error.response.data, null, 2));
    }
    if (error.code) {
      console.error("   Error code:", error.code);
    }
    // Don't throw - we still want emails to send even if Sheets fails
  }
}


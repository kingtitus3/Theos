import { google } from "googleapis";

// Get Google Sheets client using the same auth method as Google Calendar
function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  let auth: any = null;

  // Try OAuth2 with refresh token first
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
        "https://www.googleapis.com/auth/calendar", // Include calendar scope if using same auth
      ],
    });
  }

  if (!spreadsheetId || !auth) {
    return null;
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

export async function appendGiveawayEntry(entry: GiveawayEntry): Promise<void> {
  const client = getSheetsClient();
  
  if (!client) {
    console.warn("Google Sheets not configured. Entry will only be sent via email.");
    return;
  }

  try {
    // Append row to the sheet
    // Assumes the sheet has headers in row 1: Name, Email, Phone, Partner, Date, Instagram, TikTok, How They Heard, Timestamp
    await client.sheets.spreadsheets.values.append({
      spreadsheetId: client.spreadsheetId,
      range: "Sheet1!A:I", // Adjust range based on your sheet structure
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

    console.log("Giveaway entry added to Google Sheets");
  } catch (error) {
    console.error("Error adding entry to Google Sheets:", error);
    // Don't throw - we still want emails to send even if Sheets fails
  }
}


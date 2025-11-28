#!/usr/bin/env node

/**
 * Test Giveaway Entry to Google Sheets
 */

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

async function testGiveawaySheets() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  console.log("🔍 Testing Giveaway Entry to Google Sheets...\n");

  if (!spreadsheetId) {
    console.error("❌ GOOGLE_SHEETS_ID is not set!");
    process.exit(1);
  }

  let auth = null;

  // Try OAuth2 first (like Vercel)
  if (oauthClientId && oauthClientSecret && oauthRefreshToken) {
    try {
      const oauth2Client = new google.auth.OAuth2(oauthClientId, oauthClientSecret, "http://localhost");
      oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });
      auth = oauth2Client;
      console.log("✅ Using OAuth2 authentication");
    } catch (error) {
      console.warn("⚠️ OAuth2 failed, using ADC:", error.message);
    }
  }

  // Fall back to ADC
  if (!auth) {
    auth = new google.auth.GoogleAuth({
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/calendar",
      ],
    });
    console.log("✅ Using Application Default Credentials");
  }

  const sheets = google.sheets({ version: "v4", auth });

  // Test entry
  const testEntry = {
    firstName: "Test",
    lastName: `User${Date.now()}`,
    email: `test-giveaway-${Date.now()}@example.com`,
    phone: "555-123-4567",
    partnerName: "Test Partner",
    preferredDate: "2025-12-25",
    instagramHandle: "@testuser",
    tiktokHandle: "",
    howDidYouHear: "instagram",
    timestamp: new Date().toISOString(),
  };

  console.log(`\n📝 Testing write to Entries tab...`);
  console.log(`   Entry: ${testEntry.firstName} ${testEntry.lastName} (${testEntry.email})\n`);

  try {
    // Try Entries tab first
    try {
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: "Entries!A:I",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            `${testEntry.firstName} ${testEntry.lastName}`,
            testEntry.email,
            testEntry.phone,
            testEntry.partnerName || "",
            testEntry.preferredDate || "",
            testEntry.instagramHandle || "",
            testEntry.tiktokHandle || "",
            testEntry.howDidYouHear || "",
            testEntry.timestamp,
          ]],
        },
      });
      console.log("✅ Successfully wrote to Entries tab!");
      console.log(`   Updated range: ${result.data.updates?.updatedRange}`);
      console.log(`   Rows added: ${result.data.updates?.updatedRows}`);
    } catch (entriesError) {
      console.error("❌ Entries tab failed:", entriesError.message);
      if (entriesError.response?.data) {
        console.error("   Error:", JSON.stringify(entriesError.response.data, null, 2));
      }
      
      // Try Sheet1 as fallback
      console.log("\n📝 Trying Sheet1 as fallback...");
      try {
        const result = await sheets.spreadsheets.values.append({
          spreadsheetId: spreadsheetId,
          range: "Sheet1!A:I",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[
              `${testEntry.firstName} ${testEntry.lastName}`,
              testEntry.email,
              testEntry.phone,
              testEntry.partnerName || "",
              testEntry.preferredDate || "",
              testEntry.instagramHandle || "",
              testEntry.tiktokHandle || "",
              testEntry.howDidYouHear || "",
              testEntry.timestamp,
            ]],
          },
        });
        console.log("✅ Successfully wrote to Sheet1!");
        console.log(`   Updated range: ${result.data.updates?.updatedRange}`);
      } catch (sheet1Error) {
        console.error("❌ Sheet1 also failed:", sheet1Error.message);
        if (sheet1Error.response?.data) {
          console.error("   Error:", JSON.stringify(sheet1Error.response.data, null, 2));
        }
        process.exit(1);
      }
    }
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
}

testGiveawaySheets().catch(console.error);


#!/usr/bin/env node

/**
 * Test Google Sheets with OAuth (simulating Vercel environment)
 */

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

async function testOAuthSheets() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  console.log("🔍 Testing Google Sheets with OAuth (Vercel simulation)...\n");

  if (!spreadsheetId || !oauthClientId || !oauthClientSecret || !oauthRefreshToken) {
    console.error("❌ Missing OAuth credentials!");
    console.log("\n💡 These need to be set in Vercel environment variables:");
    console.log("   - GOOGLE_OAUTH_CLIENT_ID");
    console.log("   - GOOGLE_OAUTH_CLIENT_SECRET");
    console.log("   - GOOGLE_OAUTH_REFRESH_TOKEN");
    console.log("   - GOOGLE_SHEETS_ID");
    process.exit(1);
  }

  try {
    console.log("🔐 Creating OAuth2 client...");
    const oauth2Client = new google.auth.OAuth2(
      oauthClientId,
      oauthClientSecret,
      "http://localhost"
    );
    
    console.log("🔐 Setting credentials with refresh token...");
    oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });

    // Get a fresh access token
    console.log("🔐 Getting access token...");
    const { credentials } = await oauth2Client.refreshAccessToken();
    console.log("✅ Access token obtained");

    const sheets = google.sheets({ version: "v4", auth: oauth2Client });

    console.log("\n📊 Testing Google Sheets API access...");
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });

    console.log("✅ Successfully connected to Google Sheets!");
    console.log(`   Title: ${spreadsheet.data.properties?.title}`);
    console.log(`   Tabs: ${spreadsheet.data.sheets?.map(s => s.properties?.title).join(", ")}\n`);

    // Test writing to Newsletter tab
    console.log("📝 Testing write access to Newsletter tab...");
    const testEntry = {
      email: `oauth-test-${Date.now()}@example.com`,
      discountCode: "OAUTH123",
      timestamp: new Date().toISOString(),
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Newsletter!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[testEntry.email, testEntry.discountCode, testEntry.timestamp]],
      },
    });

    console.log("✅ Successfully wrote to Newsletter tab using OAuth!");
    console.log(`   Updated range: ${result.data.updates?.updatedRange}`);
    console.log(`   Rows added: ${result.data.updates?.updatedRows}`);
    console.log(`\n📧 Test entry: ${testEntry.email}`);

  } catch (error) {
    console.error("\n❌ OAuth test failed!");
    console.error("Error:", error.message);
    
    if (error.response?.data) {
      console.error("\nError details:");
      console.error(JSON.stringify(error.response.data, null, 2));
      
      if (error.response.data.error === "invalid_grant") {
        console.error("\n💡 The refresh token may be expired or invalid.");
        console.error("   You may need to generate a new refresh token.");
      } else if (error.response.data.error === "insufficient_permissions") {
        console.error("\n💡 The OAuth client doesn't have the required permissions.");
        console.error("   Make sure the OAuth client has access to Google Sheets API.");
      }
    }
    
    if (error.code) {
      console.error(`\nError code: ${error.code}`);
    }
    
    process.exit(1);
  }
}

testOAuthSheets().catch(console.error);


#!/usr/bin/env node

/**
 * Test Google Sheets Authentication
 * 
 * This script tests if Google Sheets authentication is working
 */

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

async function testSheetsAuth() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  console.log("🔍 Testing Google Sheets Authentication...\n");
  console.log("Configuration:");
  console.log(`  GOOGLE_SHEETS_ID: ${spreadsheetId ? "✅ Set" : "❌ Missing"}`);
  console.log(`  GOOGLE_OAUTH_CLIENT_ID: ${oauthClientId ? "✅ Set" : "❌ Missing"}`);
  console.log(`  GOOGLE_OAUTH_CLIENT_SECRET: ${oauthClientSecret ? "✅ Set" : "❌ Missing"}`);
  console.log(`  GOOGLE_OAUTH_REFRESH_TOKEN: ${oauthRefreshToken ? "✅ Set" : "❌ Missing"}\n`);

  if (!spreadsheetId) {
    console.error("❌ GOOGLE_SHEETS_ID is not set!");
    process.exit(1);
  }

  let auth = null;

  // Try OAuth2 first
  if (oauthClientId && oauthClientSecret && oauthRefreshToken) {
    try {
      console.log("🔐 Attempting OAuth2 authentication...");
      const oauth2Client = new google.auth.OAuth2(oauthClientId, oauthClientSecret, "http://localhost");
      oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });
      auth = oauth2Client;
      console.log("✅ OAuth2 client created");
    } catch (error) {
      console.error("❌ OAuth2 setup failed:", error.message);
    }
  } else {
    console.log("⚠️ OAuth credentials not set, trying Application Default Credentials...");
  }

  // Fall back to ADC
  if (!auth) {
    try {
      console.log("🔐 Attempting Application Default Credentials...");
      auth = new google.auth.GoogleAuth({
        scopes: [
          "https://www.googleapis.com/auth/spreadsheets",
          "https://www.googleapis.com/auth/calendar",
        ],
      });
      console.log("✅ ADC client created");
    } catch (error) {
      console.error("❌ ADC setup failed:", error.message);
      process.exit(1);
    }
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });
    
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
      email: `test-${Date.now()}@example.com`,
      discountCode: "TEST123",
      timestamp: new Date().toISOString(),
    };

    try {
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: "Newsletter!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[testEntry.email, testEntry.discountCode, testEntry.timestamp]],
        },
      });
      console.log("✅ Successfully wrote to Newsletter tab!");
      console.log(`   Updated range: ${result.data.updates?.updatedRange}`);
      console.log(`   Rows added: ${result.data.updates?.updatedRows}`);
    } catch (writeError) {
      console.error("❌ Failed to write to Newsletter tab:", writeError.message);
      if (writeError.response?.data) {
        console.error("   Error details:", JSON.stringify(writeError.response.data, null, 2));
      }
    }

  } catch (error) {
    console.error("❌ Failed to access Google Sheets:", error.message);
    if (error.response?.data) {
      console.error("   Error details:", JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

testSheetsAuth().catch(console.error);


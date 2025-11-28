#!/usr/bin/env node

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const spreadsheetId = process.env.GOOGLE_SHEETS_ID || "13LQj17MTo0gPB3dGKR9P8qu0XTVvpCTpF04pUZak6U4";

async function checkTabs() {
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });
    
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    console.log("📊 Sheet tabs in your Google Sheet:\n");
    spreadsheet.data.sheets?.forEach(sheet => {
      console.log(`  - "${sheet.properties?.title}" (ID: ${sheet.properties?.sheetId})`);
    });
    
    // Check which tab has giveaway headers
    const entriesTab = spreadsheet.data.sheets?.find(s => s.properties?.title === "Entries");
    const sheet1Tab = spreadsheet.data.sheets?.find(s => s.properties?.title === "Sheet1");
    
    console.log("\n✅ Giveaway entries should save to:", entriesTab ? '"Entries" tab' : sheet1Tab ? '"Sheet1" tab' : 'First available tab');
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

checkTabs();


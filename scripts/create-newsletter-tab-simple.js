#!/usr/bin/env node

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const spreadsheetId = process.env.GOOGLE_SHEETS_ID || "13LQj17MTo0gPB3dGKR9P8qu0XTVvpCTpF04pUZak6U4";

async function createNewsletterTab() {
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    console.log("Checking if Newsletter tab exists...");
    
    // Check if exists
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const exists = spreadsheet.data.sheets?.find(s => s.properties?.title === "Newsletter");
    
    if (exists) {
      console.log("✅ Newsletter tab already exists!");
      return;
    }

    console.log("Creating Newsletter tab...");
    
    // Create tab
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ 
          addSheet: { 
            properties: { 
              title: "Newsletter" 
            } 
          } 
        }],
      },
    });

    console.log("Adding headers...");

    // Add headers
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Newsletter!A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: { 
        values: [["Email", "Discount Code", "Timestamp"]] 
      },
    });

    // Get the sheet ID for formatting
    const spreadsheet2 = await sheets.spreadsheets.get({ spreadsheetId });
    const newsletterSheet = spreadsheet2.data.sheets?.find(s => s.properties?.title === "Newsletter");
    const sheetId = newsletterSheet?.properties?.sheetId;

    if (sheetId) {
      console.log("Formatting headers...");
      
      // Format header row
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 3,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: { bold: true },
                  backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                },
              },
              fields: "userEnteredFormat(textFormat,backgroundColor)",
            },
          }],
        },
      });
    }

    console.log("\n✅ Newsletter tab created successfully!");
    console.log("\n📊 Structure:");
    console.log("  Column A: Email");
    console.log("  Column B: Discount Code");
    console.log("  Column C: Timestamp");
    console.log(`\n📄 View it here: https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.response?.data) {
      console.error("Details:", JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

createNewsletterTab();


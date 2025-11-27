#!/usr/bin/env node

/**
 * Create Google Sheet for Giveaway Entries
 * 
 * This script creates a new Google Sheet with the proper headers
 * and returns the Sheet ID to use in your environment variables.
 */

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

async function createGiveawaySheet() {
  try {
    // Use Application Default Credentials (gcloud auth application-default login)
    const auth = new google.auth.GoogleAuth({
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });
    const drive = google.drive({ version: "v3", auth: authClient });

    // Create a new spreadsheet
    console.log("Creating Google Sheet...");
    const createResponse = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: "Theos Giveaway Entries",
        },
        sheets: [
          {
            properties: {
              title: "Entries",
            },
          },
        ],
      },
    });

    const spreadsheetId = createResponse.data.spreadsheetId;
    console.log(`✅ Sheet created! ID: ${spreadsheetId}`);

    // Add headers
    console.log("Adding headers...");
    await sheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: "Entries!A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          "Name",
          "Email",
          "Phone",
          "Partner",
          "Date",
          "Instagram",
          "TikTok",
          "How They Heard",
          "Timestamp",
        ]],
      },
    });

    // Format header row (bold)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: createResponse.data.sheets[0].properties.sheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 9,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true,
                  },
                  backgroundColor: {
                    red: 0.9,
                    green: 0.9,
                    blue: 0.9,
                  },
                },
              },
              fields: "userEnteredFormat(textFormat,backgroundColor)",
            },
          },
        ],
      },
    });

    console.log("✅ Headers added and formatted!");

    // Get the sheet URL
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
    console.log(`\n📊 Sheet URL: ${sheetUrl}`);

    console.log("\n✨ Next steps:");
    console.log(`1. Add to Vercel: GOOGLE_SHEETS_ID=${spreadsheetId}`);
    console.log("2. Share the sheet with your Google account (if needed)");
    console.log("3. Test by submitting a giveaway entry!");

    return spreadsheetId;
  } catch (error) {
    console.error("❌ Error creating sheet:", error.message);
    if (error.response) {
      console.error("Details:", error.response.data);
    }
    process.exit(1);
  }
}

createGiveawaySheet();


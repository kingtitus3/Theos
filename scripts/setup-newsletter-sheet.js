#!/usr/bin/env node

/**
 * Setup Newsletter Sheet Tab
 * 
 * This script creates a "Newsletter" tab in your existing Google Sheet
 * with headers for email collection.
 */

const { google } = require("googleapis");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

async function setupNewsletterSheet() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      console.error("❌ GOOGLE_SHEETS_ID not found in .env.local");
      process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/calendar",
      ],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    // Check if Newsletter sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });

    const existingSheet = spreadsheet.data.sheets?.find(
      (sheet) => sheet.properties?.title === "Newsletter"
    );

    if (existingSheet) {
      console.log("✅ Newsletter sheet already exists!");
      return;
    }

    // Create Newsletter sheet
    console.log("Creating Newsletter sheet...");
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: "Newsletter",
              },
            },
          },
        ],
      },
    });

    // Add headers
    await sheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: "Newsletter!A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["Email", "Discount Code", "Timestamp"]],
      },
    });

    // Format header row
    const spreadsheet2 = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });
    const newsletterSheetId = spreadsheet2.data.sheets?.find(
      (sheet) => sheet.properties?.title === "Newsletter"
    )?.properties?.sheetId;

    if (newsletterSheetId) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: spreadsheetId,
        requestBody: {
          requests: [
            {
              repeatCell: {
                range: {
                  sheetId: newsletterSheetId,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: 3,
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
    }

    console.log("✅ Newsletter sheet created with headers!");
    console.log("\n📊 Sheet structure:");
    console.log("  Column A: Email");
    console.log("  Column B: Discount Code");
    console.log("  Column C: Timestamp");
  } catch (error) {
    console.error("❌ Error setting up newsletter sheet:", error.message);
    if (error.response) {
      console.error("Details:", error.response.data);
    }
    process.exit(1);
  }
}

setupNewsletterSheet();


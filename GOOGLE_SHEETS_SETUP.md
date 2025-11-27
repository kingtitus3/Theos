# Google Sheets Setup for Giveaway Entries

## Quick Setup Guide

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Theos Giveaway Entries" (or whatever you prefer)
4. Add these headers in row 1 (columns A through I):
   ```
   Name | Email | Phone | Partner | Date | Instagram | TikTok | How They Heard | Timestamp
   ```

### Step 2: Get the Sheet ID

1. Look at the URL of your Google Sheet
2. The Sheet ID is the long string between `/d/` and `/edit`
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit`
   - Sheet ID: `1ABC123xyz...`

### Step 3: Share the Sheet with Your Service Account (if using service account)

**Option A: Using OAuth (Same as Google Calendar)**
- If you're already using OAuth for Google Calendar, the same credentials will work!
- Just add the Sheet ID to your environment variables

**Option B: Using Application Default Credentials**
- If you're using `gcloud auth application-default login`, it will work automatically
- Just make sure to share the sheet with the account you authenticated with

**Option C: Using Service Account (New)**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a service account (or use existing one)
3. Download the JSON key
4. Share your Google Sheet with the service account email (found in the JSON)
5. Add the JSON key to your environment

### Step 4: Add Environment Variable

Add to your `.env.local` and Vercel:

```bash
GOOGLE_SHEETS_ID=your_sheet_id_here
```

**Note:** If you're using the same OAuth credentials as Google Calendar, you don't need to add anything else! The existing `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, and `GOOGLE_OAUTH_REFRESH_TOKEN` will work.

### Step 5: Test It

1. Submit a test entry on the giveaway page
2. Check your Google Sheet - a new row should appear automatically!

---

## Sheet Structure

Your sheet should look like this:

| Name | Email | Phone | Partner | Date | Instagram | TikTok | How They Heard | Timestamp |
|------|-------|-------|---------|------|-----------|--------|----------------|-----------|
| John Doe | john@example.com | 555-1234 | Jane Doe | 2025-06-15 | @johndoe | | Instagram | 2024-11-27T10:30:00Z |

---

## Troubleshooting

**Entries not appearing?**
1. Check that `GOOGLE_SHEETS_ID` is set correctly
2. Make sure the sheet is shared with your authenticated account
3. Check Vercel function logs for errors
4. Verify the sheet headers match exactly (Name, Email, Phone, Partner, Date, Instagram, TikTok, How They Heard, Timestamp)

**Permission errors?**
- Make sure the sheet is shared with the account/service account you're using
- Check that the OAuth token has `spreadsheets` scope (it should if using the same as Calendar)

---

## Using the Same OAuth as Google Calendar

**Good news:** If you're already using OAuth for Google Calendar, you can use the **exact same credentials**! Just add:

```bash
GOOGLE_SHEETS_ID=your_sheet_id_here
```

That's it! The existing OAuth setup will work for Sheets too.


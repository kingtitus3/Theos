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

### Step 3: Authenticate with gcloud (Same as Google Calendar)

Since you're already using `gcloud auth application-default login` for Google Calendar, the same authentication will work for Google Sheets!

**If you haven't set it up yet:**
```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/calendar
```

**If you already have it set up:**
- You're all set! Just make sure your Google Sheet is shared with the same account you authenticated with.

### Step 4: Share Your Google Sheet

1. Open your Google Sheet
2. Click "Share" (top right)
3. Share it with the same Google account you used for `gcloud auth application-default login`
4. Give it "Editor" permissions

### Step 5: Add Environment Variable

Add to your `.env.local` and Vercel:

```bash
GOOGLE_SHEETS_ID=your_sheet_id_here
```

**That's it!** No OAuth tokens needed - it uses the same gcloud authentication as your Google Calendar.

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


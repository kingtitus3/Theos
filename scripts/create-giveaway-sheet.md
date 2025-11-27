# Quick Setup: Create Google Sheet for Giveaway

## Step 1: Create the Sheet

1. Go to: https://sheets.google.com
2. Click "Blank" to create a new spreadsheet
3. Name it: "Theos Giveaway Entries"

## Step 2: Add Headers

In row 1, add these headers (one per column):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Name | Email | Phone | Partner | Date | Instagram | TikTok | How They Heard | Timestamp |

## Step 3: Get the Sheet ID

1. Look at the URL in your browser
2. It will look like: `https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit`
3. Copy the part between `/d/` and `/edit` - that's your Sheet ID

## Step 4: Share the Sheet

1. Click "Share" (top right)
2. Share with the email address you used for `gcloud auth application-default login`
3. Give it "Editor" permissions

## Step 5: Add to Vercel

Once you have the Sheet ID, I'll add it to Vercel for you!


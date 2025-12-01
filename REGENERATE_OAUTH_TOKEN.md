# Regenerate OAuth Token with Sheets Scope

## Problem
Your current OAuth refresh token was created with only the Calendar scope, but Google Sheets requires the `spreadsheets` scope as well.

## Solution: Regenerate the Refresh Token

### Step 1: Update Environment Variables
Make sure these are set in your `.env.local`:
```bash
GOOGLE_OAUTH_CLIENT_ID=your-client-id
GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
REDIRECT_URI=http://localhost
```

### Step 2: Run the Token Generator
```bash
node scripts/get-refresh-token.mjs
```

### Step 3: Authorize
1. The script will print a URL - open it in your browser
2. Sign in with the Google account that owns the calendar/sheets
3. Grant permissions for **both Calendar AND Sheets**
4. Copy the `code` from the redirect URL
5. Paste it into the terminal

### Step 4: Update Vercel
1. Copy the new refresh token from the output
2. Go to Vercel → Your Project → Settings → Environment Variables
3. Update `GOOGLE_OAUTH_REFRESH_TOKEN` with the new token
4. Redeploy (or wait for next deployment)

### Step 5: Test
Submit a test newsletter or giveaway entry and check:
- Vercel function logs should show "✅ Using OAuth2 for Google Sheets authentication"
- No more "insufficient authentication scopes" errors
- Data should appear in your Google Sheet

---

**Important:** The refresh token must be regenerated with **both** scopes:
- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/spreadsheets`

The updated script now requests both scopes automatically.


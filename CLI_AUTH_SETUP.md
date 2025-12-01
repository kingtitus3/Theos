# CLI-Based Google Authentication Setup

## Why Use CLI?

Much simpler than OAuth refresh tokens! One command, and you're done.

## Quick Setup (One Command)

```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/spreadsheets
```

This will:
1. Open your browser once for authentication
2. Sign in with `bookings@theosgalveston.com`
3. Store credentials locally
4. Work automatically for both Calendar and Sheets

## That's It!

No need for:
- ❌ OAuth Client ID/Secret in `.env.local`
- ❌ Refresh tokens
- ❌ Complex OAuth flows
- ❌ Multiple browser redirects

## How It Works

The code in `lib/googleSheets.ts` and `lib/googleCalendar.ts` automatically uses Application Default Credentials (ADC) when OAuth tokens aren't available. The `gcloud` command sets up ADC for you.

## Verify It's Working

After running the command, test it:

```bash
# Test Calendar access
node -e "const {google} = require('googleapis'); const auth = new google.auth.GoogleAuth({scopes: ['https://www.googleapis.com/auth/calendar']}); auth.getClient().then(() => console.log('✅ Calendar auth works!'));"

# Test Sheets access  
node -e "const {google} = require('googleapis'); const auth = new google.auth.GoogleAuth({scopes: ['https://www.googleapis.com/auth/spreadsheets']}); auth.getClient().then(() => console.log('✅ Sheets auth works!'));"
```

## For Vercel/Production

**Note:** Application Default Credentials work locally, but for Vercel you'll still need OAuth refresh tokens. However, you can:

1. Use CLI auth for local development (no tokens needed)
2. Use OAuth refresh tokens only for Vercel production

The code automatically falls back to OAuth if ADC isn't available.

## Re-authenticate if Needed

If credentials expire or you need to switch accounts:

```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/spreadsheets
```

## Check Current Auth

See which account is authenticated:

```bash
gcloud auth application-default print-access-token
```

Or check the account:

```bash
gcloud auth list
```

---

**TL;DR:** Just run `gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/spreadsheets` and you're done! 🎉


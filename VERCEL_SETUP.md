# Vercel Setup for Google Calendar & Sheets

## Overview

Vercel can't use `gcloud` credentials, so you need OAuth refresh tokens. The code automatically uses OAuth tokens when available (Vercel) and falls back to Application Default Credentials locally.

## Step 1: Get OAuth Refresh Token

### Option A: Use the Token Generator Script (Recommended)

1. Make sure your `.env.local` has:
   ```bash
   GOOGLE_OAUTH_CLIENT_ID=your-client-id.apps.googleusercontent.com
   GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
   REDIRECT_URI=http://localhost
   ```
   
   **Note:** Get these from your `client_secret_*.json` file or Google Cloud Console → Credentials

2. Run the token generator:
   ```bash
   node scripts/get-refresh-token.mjs
   ```

3. Follow the prompts:
   - Open the URL in your browser
   - Sign in with `bookings@theosgalveston.com`
   - Grant permissions for **both Calendar AND Sheets**
   - Copy the `code` from the redirect URL
   - Paste it into the terminal
   - Copy the refresh token from the output

### Option B: Fix OAuth Consent Screen First

If you get errors, see:
- `FIX_ORG_INTERNAL_ERROR.md` - For "org_internal" errors
- `OAUTH_TROUBLESHOOTING.md` - For other OAuth issues

## Step 2: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **Theos**
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

### Required Variables

```bash
# Google Calendar
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com

# Google Sheets
GOOGLE_SHEETS_ID=your-sheet-id-here

# OAuth Credentials (for Vercel)
GOOGLE_OAUTH_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
GOOGLE_OAUTH_REFRESH_TOKEN=your-refresh-token-from-step-1

# Other variables you might have
RESEND_API_KEY=your-resend-key
CRON_SECRET=your-cron-secret
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Environment Selection

For each variable, select:
- **Production** ✅
- **Preview** ✅ (optional, for preview deployments)
- **Development** ❌ (not needed, uses local `.env.local`)

## Step 3: Verify OAuth Consent Screen

Make sure your OAuth consent screen is configured:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **APIs & Services** → **OAuth consent screen**
3. Verify:
   - User Type: **External** (or Internal if using Workspace)
   - App name: **theobookingapp**
   - Scopes include:
     - `https://www.googleapis.com/auth/calendar`
     - `https://www.googleapis.com/auth/spreadsheets`
   - Test users include: `bookings@theosgalveston.com` (if in Testing mode)

## Step 4: Redeploy

After adding environment variables:

1. Go to **Deployments** tab
2. Click **⋯** on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

## Step 5: Test

### Test Calendar
1. Submit a test booking through your site
2. Check Vercel function logs:
   - Should show: `✅ Using OAuth2 for Google Calendar authentication`
   - Event should appear in your Google Calendar

### Test Sheets
1. Submit a test giveaway entry
2. Check Vercel function logs:
   - Should show: `✅ Using OAuth2 for Google Sheets authentication`
   - Entry should appear in your Google Sheet

## Troubleshooting

### "Insufficient authentication scopes"
- Your refresh token doesn't have the required scopes
- Regenerate the token with **both** Calendar and Sheets scopes
- See `REGENERATE_OAUTH_TOKEN.md`

### "Invalid refresh token"
- Token might be expired or revoked
- Regenerate a new token
- Make sure you're using the latest token in Vercel

### "Access blocked: org_internal"
- OAuth consent screen is set to Internal
- Change to External (see `FIX_ORG_INTERNAL_ERROR.md`)

### Variables not updating
- Make sure you selected the right environment (Production/Preview)
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

## Environment Variable Checklist

- [ ] `GOOGLE_CALENDAR_ID`
- [ ] `GOOGLE_SHEETS_ID`
- [ ] `GOOGLE_OAUTH_CLIENT_ID`
- [ ] `GOOGLE_OAUTH_CLIENT_SECRET`
- [ ] `GOOGLE_OAUTH_REFRESH_TOKEN`
- [ ] `RESEND_API_KEY` (if using email)
- [ ] `CRON_SECRET` (if using cron jobs)
- [ ] Any other variables your app needs

## How It Works

The code automatically detects the environment:

- **Local Development**: Uses `gcloud auth application-default login` credentials
- **Vercel Production**: Uses OAuth refresh tokens from environment variables

No code changes needed - it just works! 🎉

---

## Quick Reference

**Get refresh token:**
```bash
node scripts/get-refresh-token.mjs
```

**Add to Vercel:**
1. Settings → Environment Variables
2. Add all required variables
3. Redeploy

**Test:**
- Check Vercel function logs
- Verify data appears in Calendar/Sheets


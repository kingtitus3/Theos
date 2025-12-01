# Setup New OAuth Client - Quick Guide

## ✅ Step 1: Credentials Updated

Your `.env.local` has been updated with the new OAuth credentials:
- Client ID: `your-new-client-id.apps.googleusercontent.com`
- Client Secret: `your-new-client-secret`

**Note:** Get these from the OAuth client creation dialog in Google Cloud Console

## ⚠️ Step 2: Configure OAuth Consent Screen

**Important:** The message says "OAuth access is restricted to users within your organization unless the OAuth consent screen is published and verified"

You need to configure the OAuth consent screen:

### Quick Setup:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **APIs & Services** → **OAuth consent screen**
3. If it's not configured yet, click **CREATE**
4. Configure:
   - **User Type:** External (recommended) or Internal
   - **App name:** `theobookingapp`
   - **User support email:** `bookings@theosgalveston.com`
   - **Developer contact:** `bookings@theosgalveston.com`
5. Add scopes:
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/spreadsheets`
6. If in Testing mode, add test user: `bookings@theosgalveston.com`
7. Save all steps

## ✅ Step 3: Verify Redirect URI

Make sure `http://localhost` is in your OAuth client's authorized redirect URIs:

1. Go to **Credentials** → Click on your OAuth client
2. Under **Authorized redirect URIs**, ensure `http://localhost` is listed
3. If not, add it and save

## 🚀 Step 4: Generate Refresh Token

Now you can generate your refresh token:

```bash
node scripts/get-refresh-token.mjs
```

The script will:
1. Use your new credentials
2. Generate an OAuth URL
3. Let you authorize with `bookings@theosgalveston.com`
4. Give you a refresh token for Vercel

## 📝 Step 5: Add to Vercel

Once you have the refresh token:

1. Go to Vercel → Your Project → Settings → Environment Variables
2. Update these variables:
   - `GOOGLE_OAUTH_CLIENT_ID` = (your new client ID from Google Cloud Console)
   - `GOOGLE_OAUTH_CLIENT_SECRET` = (your new client secret from Google Cloud Console)
   - `GOOGLE_OAUTH_REFRESH_TOKEN` = (the token from step 4)
3. Redeploy

## 🔒 Security Note

**Important:** The client secret can only be viewed once. You've copied it, but make sure it's:
- ✅ Stored in `.env.local` (already done)
- ✅ Will be added to Vercel environment variables
- ❌ NOT committed to Git (already in `.gitignore`)

---

## Troubleshooting

**"OAuth access is restricted"**
- Configure the OAuth consent screen (Step 2)
- Make sure it's set to External or add your email as a test user

**"Redirect URI mismatch"**
- Add `http://localhost` to authorized redirect URIs (Step 3)

**"Can't select account"**
- Add `bookings@theosgalveston.com` as a test user if app is in Testing mode

---

You're all set! Run the token generator script and you should be good to go! 🎉


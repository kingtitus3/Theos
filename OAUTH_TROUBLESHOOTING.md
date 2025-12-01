# OAuth Troubleshooting Guide

## Problem: "Not letting me select a Google account"

This usually means one of these issues:

### 1. OAuth Consent Screen Not Configured

**Fix:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **OAuth consent screen**
3. Make sure it's configured:
   - **User Type:** External (unless you have Google Workspace)
   - **App name:** Theos Event Booking (or any name)
   - **User support email:** Your email
   - **Developer contact:** Your email
   - **Scopes:** Add both:
     - `https://www.googleapis.com/auth/calendar`
     - `https://www.googleapis.com/auth/spreadsheets`
   - **Test users:** If app is in "Testing" mode, add your email as a test user
4. Click **Save and Continue** through all steps

### 2. App is in Testing Mode (Most Common Issue!)

If your OAuth app is in "Testing" mode, only test users can sign in.

**Fix:**
- Option A: Add yourself as a test user
  1. Go to **OAuth consent screen**
  2. Scroll to **Test users**
  3. Click **+ ADD USERS**
  4. Add your email: `titus.edwards7@gmail.com`
  5. Save

- Option B: Publish the app (if you're ready)
  1. Go to **OAuth consent screen**
  2. Click **PUBLISH APP**
  3. Confirm (this makes it available to anyone, but you can unpublish later)

### 3. Redirect URI Mismatch

The redirect URI in your `.env.local` must **exactly match** what's configured in Google Cloud Console.

**Check:**
1. Go to **APIs & Services** → **Credentials**
2. Click on your OAuth 2.0 Client ID
3. Check **Authorized redirect URIs**
4. Make sure one of these is listed:
   - `http://localhost`
   - `http://localhost:3000`
   - `urn:ietf:wg:oauth:2.0:oob` (for desktop apps)

**Fix:**
- Add the redirect URI if it's missing
- Or update your `.env.local` to match what's configured

### 4. Wrong OAuth Client Type

Make sure you created a **Web application** OAuth client, not Desktop or Other.

**Check:**
1. Go to **Credentials**
2. Your OAuth client should show type: **Web application**

### 5. Try Alternative Redirect URI

If `http://localhost` doesn't work, try `urn:ietf:wg:oauth:2.0:oob`:

1. Update `.env.local`:
   ```bash
   REDIRECT_URI=urn:ietf:wg:oauth:2.0:oob
   ```

2. Add this to your OAuth client's **Authorized redirect URIs** in Google Cloud Console

3. When you authorize, Google will show the code on the page instead of redirecting

---

## Quick Checklist

- [ ] OAuth consent screen is configured
- [ ] Your email is added as a test user (if app is in Testing mode)
- [ ] Redirect URI matches exactly in both `.env.local` and Google Cloud Console
- [ ] OAuth client type is "Web application"
- [ ] Both Calendar and Sheets APIs are enabled
- [ ] Scopes are added to the consent screen

---

## Still Not Working?

Try this alternative method using `gcloud` CLI:

```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/spreadsheets
```

This uses a different authentication method that might work better for your setup.


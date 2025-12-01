# Why Can't I Make a Token? - Diagnosis Guide

## ✅ Good News: The Script Works!

Your script is generating the OAuth URL correctly. The issue is likely during the **authorization step**.

## Common Issues & Solutions

### Issue 1: "Error 403: org_internal" 

**Problem:** OAuth consent screen is set to "Internal" (Google Workspace only)

**Solution:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **APIs & Services** → **OAuth consent screen**
3. Click **EDIT APP**
4. Change **User Type** from **Internal** to **External**
5. Complete the setup:
   - App name: `theobookingapp`
   - User support email: `bookings@theosgalveston.com`
   - Developer contact: `bookings@theosgalveston.com`
   - Add scopes: Calendar + Sheets
6. Save and try again

**See:** `FIX_ORG_INTERNAL_ERROR.md` for detailed steps

---

### Issue 2: "Can't Select Google Account"

**Problem:** App is in "Testing" mode and your email isn't added as a test user

**Solution:**
1. Go to **OAuth consent screen**
2. Scroll to **Test users**
3. Click **+ ADD USERS**
4. Add: `bookings@theosgalveston.com`
5. Save
6. Try the OAuth URL again

---

### Issue 3: Redirect URI Mismatch

**Problem:** `http://localhost` redirect doesn't work

**Solution A:** Add redirect URI to Google Cloud Console
1. Go to **Credentials** → Your OAuth Client
2. Under **Authorized redirect URIs**, add: `http://localhost`
3. Save

**Solution B:** Use alternative redirect URI
1. Update `.env.local`:
   ```bash
   REDIRECT_URI=urn:ietf:wg:oauth:2.0:oob
   ```
2. Add this to your OAuth client's redirect URIs in Google Cloud Console
3. When you authorize, Google will show the code on the page (no redirect)

---

### Issue 4: Can't Get the Code from Redirect URL

**Problem:** After authorizing, you're redirected to `http://localhost` but can't see the code

**Solution:**
1. Look at the URL in your browser's address bar
2. It should look like: `http://localhost/?code=4/0AeanS...&scope=...`
3. Copy everything after `code=` and before `&`
4. Paste that into the terminal

**Alternative:** Use `urn:ietf:wg:oauth:2.0:oob` redirect URI (see Issue 3, Solution B)

---

## Step-by-Step: Making a Token

1. **Run the script:**
   ```bash
   node scripts/get-refresh-token.mjs
   ```

2. **Copy the OAuth URL** it generates

3. **Open it in your browser**

4. **Sign in with:** `bookings@theosgalveston.com`

5. **Grant permissions** for Calendar and Sheets

6. **Get the code:**
   - If using `http://localhost`: Look at the redirect URL, copy the `code` parameter
   - If using `urn:ietf:wg:oauth:2.0:oob`: Copy the code from the page

7. **Paste the code** into the terminal

8. **Copy the refresh token** from the output

---

## Quick Fix Checklist

Before trying again, verify:

- [ ] OAuth consent screen is set to **External** (not Internal)
- [ ] `bookings@theosgalveston.com` is added as a test user (if app is in Testing mode)
- [ ] `http://localhost` is in your OAuth client's **Authorized redirect URIs**
- [ ] You're signing in with `bookings@theosgalveston.com` (not a personal account)
- [ ] You're granting permissions for **both** Calendar and Sheets

---

## Still Not Working?

Try the alternative redirect URI method:

1. Update `.env.local`:
   ```bash
   REDIRECT_URI=urn:ietf:wg:oauth:2.0:oob
   ```

2. Add `urn:ietf:wg:oauth:2.0:oob` to your OAuth client's redirect URIs

3. Run the script again

4. When you authorize, Google will show the code directly on the page (no redirect needed)

---

## Why You Need This Token

- **Local development:** You can use `gcloud auth` (already set up ✅)
- **Vercel production:** Needs OAuth refresh token (this is what you're making)

The code automatically uses the right method based on what's available!


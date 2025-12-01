# Quick Fix: Error 403: org_internal

## The Problem
Your OAuth consent screen is set to "Internal" (Google Workspace only), but you need it to be "External" to work with `bookings@theosgalveston.com`.

## 5-Minute Fix

### Step 1: Go to OAuth Consent Screen
1. Visit: https://console.cloud.google.com/
2. Select your project (probably "fambus" based on your JSON file)
3. Go to: **APIs & Services** → **OAuth consent screen**

### Step 2: Change to External
1. You'll see **User Type: Internal** at the top
2. Click **EDIT APP** (or the pencil icon)
3. Change **User Type** from **Internal** to **External**
4. Click **SAVE AND CONTINUE**

### Step 3: Fill Required Fields
- **App name:** `theobookingapp`
- **User support email:** `bookings@theosgalveston.com`
- **Developer contact information:** `bookings@theosgalveston.com`
- Click **SAVE AND CONTINUE**

### Step 4: Add Scopes
1. Click **ADD OR REMOVE SCOPES**
2. Make sure these are added:
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/spreadsheets`
3. Click **UPDATE** then **SAVE AND CONTINUE**

### Step 5: Add Test User (if in Testing mode)
1. If you see "Testing" status, scroll to **Test users**
2. Click **+ ADD USERS**
3. Add: `bookings@theosgalveston.com`
4. Click **ADD**
5. Click **SAVE AND CONTINUE**

### Step 6: Complete Setup
- Review the summary
- Click **BACK TO DASHBOARD**

### Step 7: Try Again
```bash
node scripts/get-refresh-token.mjs
```

Open the URL and sign in with `bookings@theosgalveston.com` - it should work now! ✅

---

## If You Can't Change to External

If your organization requires Internal-only apps, you have two options:

1. **Use a Google Workspace account** that's part of the same organization
2. **Create a new OAuth client** in a different Google Cloud project (personal account)

---

## Still Not Working?

After changing to External, wait 1-2 minutes for changes to propagate, then try again.


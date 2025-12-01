# Why OAuth Refresh Tokens Can't Be Generated via CLI

## The Short Answer

**No, you can't generate OAuth refresh tokens purely through CLI** because OAuth2 requires user consent, which needs a browser interaction.

## Why?

OAuth2 is designed for user authorization:
1. User must explicitly grant permissions
2. This requires a browser for security
3. Google shows what permissions you're granting
4. You click "Allow" to consent

This is a security feature - you can't bypass user consent.

## What You CAN Do via CLI

### ✅ Local Development (Already Working!)

```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/spreadsheets
```

This works locally and you've already done it! ✅

### ❌ Vercel/Production

Vercel can't use `gcloud` credentials, so you need OAuth refresh tokens. These require the browser flow (one time).

## Alternative: Service Accounts (Fully CLI!)

If you want to avoid OAuth entirely, you can use **Service Accounts**:

### Pros:
- ✅ Fully CLI-based setup
- ✅ No browser needed
- ✅ Works on Vercel (just upload the key file)
- ✅ No refresh tokens needed

### Cons:
- ❌ Requires sharing your calendar/sheet with the service account email
- ❌ Different approach (service account vs user account)
- ❌ Service account emails look like: `theos-calendar@project-id.iam.gserviceaccount.com`

### Setup Service Account (CLI Only):

```bash
# 1. Create service account
gcloud iam service-accounts create theos-calendar \
  --display-name="Theos Calendar Bot"

# 2. Get the service account email
SERVICE_ACCOUNT_EMAIL=$(gcloud iam service-accounts list --filter="displayName:Theos Calendar Bot" --format="value(email)")

# 3. Create and download key
gcloud iam service-accounts keys create theos-service-account-key.json \
  --iam-account=$SERVICE_ACCOUNT_EMAIL

# 4. Share your calendar with the service account
echo "Share your Google Calendar with: $SERVICE_ACCOUNT_EMAIL"
echo "Share your Google Sheet with: $SERVICE_ACCOUNT_EMAIL"
```

Then update your code to use service account authentication instead of OAuth.

---

## Recommendation

**For now:** Use the browser flow once to get the refresh token. It's a one-time setup:
1. Run `node scripts/get-refresh-token.mjs`
2. Open the URL (one browser click)
3. Authorize (one click)
4. Copy the token
5. Done forever (until you revoke it)

**If you really want CLI-only:** Switch to service accounts, but you'll need to:
- Share your calendar/sheet with the service account
- Update your code to use service account keys
- Upload the key file to Vercel

---

## Bottom Line

- **Local dev:** Already working with `gcloud` ✅
- **Vercel:** Need OAuth refresh token (one-time browser flow) OR switch to service accounts

The browser flow is actually pretty quick - just one authorization step!


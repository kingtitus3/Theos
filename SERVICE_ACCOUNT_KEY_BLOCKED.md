# Service Account Key Creation Blocked

## Problem

Your Google Cloud organization has a policy that prevents service account key creation:
```
Key creation is not allowed on this service account.
type: constraints/iam.disableServiceAccountKeyCreation
```

This is a security policy set by your organization.

## Solutions

### Option 1: Use OAuth Refresh Tokens (Recommended)

Since service account keys are blocked, go back to using OAuth refresh tokens:

1. **Get OAuth refresh token:**
   ```bash
   node scripts/get-refresh-token.mjs
   ```
   - Configure OAuth consent screen to External
   - Authorize with `bookings@theosgalveston.com`
   - Get the refresh token

2. **Add to Vercel:**
   - `GOOGLE_OAUTH_CLIENT_ID`
   - `GOOGLE_OAUTH_CLIENT_SECRET`
   - `GOOGLE_OAUTH_REFRESH_TOKEN`

3. **Local development:**
   - Already working with `gcloud auth application-default login` ✅

### Option 2: Request Policy Exception (If Possible)

If you have admin access or can request it:
1. Go to Google Cloud Console → IAM & Admin → Organization Policies
2. Find "Disable service account key creation"
3. Request exception or modify policy for your project

### Option 3: Use Workload Identity Federation

More complex but works with restricted policies:
- Requires setting up Workload Identity Pool
- More setup but more secure
- See: https://cloud.google.com/iam/docs/workload-identity-federation

## Recommendation

**Use OAuth refresh tokens** - it's the simplest solution and works well:
- ✅ Local: Already working with `gcloud auth`
- ✅ Vercel: Just need the refresh token (one-time browser auth)
- ✅ No policy restrictions

The code already supports both methods, so you can switch back to OAuth easily.


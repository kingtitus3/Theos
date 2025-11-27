# Social Media Auto-Posting Options

## ❌ Buffer API (Not Available)
Buffer discontinued their public API in October 2019. They're working on a new API but it's not publicly available yet.

**You can still use Buffer's web/mobile app** for manual posting and scheduling, but no API access for automation.

---

## ✅ Working Alternatives

### 1. **Facebook/Instagram Graph API** (Recommended)
Direct API access to both platforms.

**Setup:**
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → "Business" type
3. Add products:
   - Instagram Basic Display
   - Instagram Graph API
   - Facebook Pages API

**Get Access Token:**
1. Tools → Graph API Explorer
2. Select your app
3. Select your Facebook Page
4. Generate token with permissions:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_posts`
   - `instagram_basic`
   - `instagram_content_publish`

**API Endpoints:**
- Facebook: `https://graph.facebook.com/v18.0/{page-id}/feed`
- Instagram: `https://graph.facebook.com/v18.0/{ig-user-id}/media`

**Use the script:** `scripts/social-post.js` (already created)

---

### 2. **Hootsuite API**
- Still has public API
- Sign up at [hootsuite.com](https://hootsuite.com)
- API docs: [developer.hootsuite.com](https://developer.hootsuite.com/)

---

### 3. **SocialBee API**
- Social media management with API
- [socialbee.io](https://socialbee.io)

---

### 4. **Zapier/Make (n8n)**
- Webhook-based automation
- Connect to Facebook/Instagram via their integrations
- No direct API needed

**Zapier Setup:**
1. Create Zapier account
2. Create Zap: Webhook → Facebook/Instagram
3. Get webhook URL
4. Post from CLI: `curl -X POST YOUR_WEBHOOK_URL -d '{"text":"Your post"}'`

---

### 5. **Later API**
- Social media scheduler with API
- [later.com](https://later.com)
- API docs: [docs.later.com](https://docs.later.com/)

---

## 🚀 Quick Start: Facebook/Instagram Direct API

The easiest working solution is using Facebook/Instagram Graph API directly.

**1. Install dependencies:**
```bash
npm install axios form-data dotenv
```

**2. Set up Facebook App:**
- Go to [developers.facebook.com](https://developers.facebook.com/)
- Create app → Business type
- Add Instagram Graph API product
- Get Page Access Token

**3. Add to `.env.local`:**
```bash
FACEBOOK_PAGE_ACCESS_TOKEN=your_token_here
FACEBOOK_PAGE_ID=61584310322904
INSTAGRAM_ACCESS_TOKEN=your_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
```

**4. Post from CLI:**
```bash
# Text only
node scripts/social-post.js "Now booking 2025 weddings at Theos!"

# With image
node scripts/social-post.js "Check out our space!" --image public/images/gallery/wedding-1.jpg
```

---

## 📋 Comparison

| Platform | API Available | Free Tier | Ease of Setup |
|----------|--------------|-----------|---------------|
| Buffer | ❌ No (discontinued) | ✅ Yes (web app) | ⭐⭐⭐⭐⭐ |
| Facebook/Instagram | ✅ Yes | ✅ Yes | ⭐⭐⭐ |
| Hootsuite | ✅ Yes | ❌ Paid | ⭐⭐⭐ |
| Zapier | ✅ Yes (via webhooks) | ✅ Limited free | ⭐⭐⭐⭐ |
| Later | ✅ Yes | ❌ Paid | ⭐⭐⭐ |

---

## 💡 Recommendation for Theos

**Best approach:**
1. **Manual posting:** Use Buffer's web app (free, easy)
2. **Automated posting:** Use Facebook/Instagram Graph API directly
3. **Form-triggered posts:** Use Zapier webhooks

The `scripts/social-post.js` script is ready to use once you set up Facebook/Instagram API credentials.


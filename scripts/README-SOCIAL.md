# Social Media Auto-Posting Setup

## Quick Options

### 1. **Buffer CLI** (Easiest)
- Sign up at [buffer.com](https://buffer.com)
- Install: `npm install -g buffer-cli` (if available)
- Or use Buffer's web interface with scheduled posts

### 2. **Hootsuite CLI**
- Sign up at [hootsuite.com](https://hootsuite.com)
- Use their API or web interface

### 3. **Custom Script** (Most Control)
- Use the `scripts/social-post.js` script included
- Requires Facebook/Instagram API setup

## Facebook/Instagram API Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → "Business" type
3. Add "Instagram Basic Display" and "Instagram Graph API" products

### Step 2: Get Page Access Token
1. In your app, go to "Tools" → "Graph API Explorer"
2. Select your app
3. Select your Facebook Page
4. Generate token with permissions:
   - `pages_show_list`
   - `pages_read_engagement`
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_manage_posts`

### Step 3: Get Instagram Business Account ID
1. Go to [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Query: `me/accounts` to get your page ID
3. Query: `{page-id}?fields=instagram_business_account` to get Instagram account ID

### Step 4: Add to `.env.local`
```bash
FACEBOOK_PAGE_ACCESS_TOKEN=your_token_here
FACEBOOK_PAGE_ID=61584310322904
INSTAGRAM_ACCESS_TOKEN=your_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
```

## Usage

### Install Dependencies
```bash
npm install axios form-data dotenv
```

### Post Text Only
```bash
node scripts/social-post.js "Now booking 2025 weddings at Theos! Tour our historic brick venue in downtown Galveston. Link in bio."
```

### Post with Image
```bash
node scripts/social-post.js "Check out our new space setup!" --image public/images/gallery/wedding-1.jpg
```

## Alternative: Use Zapier/n8n

1. **Zapier**:
   - Create a "Webhook" trigger
   - Add Facebook/Instagram actions
   - Post via: `curl -X POST https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID -d '{"text":"Your post"}'`

2. **n8n** (Self-hosted):
   - Free, open-source
   - Set up workflows via web UI
   - Can trigger from CLI via webhooks

## Recommended: Buffer (Easiest for Non-Technical)

1. Sign up at [buffer.com](https://buffer.com)
2. Connect Instagram and Facebook
3. Use their web interface or mobile app
4. Schedule posts in advance
5. Free plan: 3 social accounts, 10 scheduled posts

## For Theos Venue

**Recommended workflow:**
1. Use Buffer for regular posting (easiest)
2. Use custom script for automated posts (e.g., "New booking" announcements)
3. Use Zapier for form submission → social post automation

**Content ideas:**
- Weekly: "Now booking 2025 weddings"
- Event photos: Post after each event (with permission)
- Availability: "Weekday specials available"
- Tours: "Book a tour this month"


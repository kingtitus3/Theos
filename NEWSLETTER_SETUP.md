# Newsletter Email Collection Setup

## ✅ What's Live

The giveaway popup is now active on your homepage! It will:
- Appear 2 seconds after page load
- Show once per user (uses localStorage)
- Collect emails for newsletter
- Generate unique 5% discount codes
- Send confirmation emails with discount codes

## 📊 Google Sheets Setup

To store newsletter emails in Google Sheets, you need to create a "Newsletter" tab:

### Option 1: Manual Setup (Easiest)

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/13LQj17MTo0gPB3dGKR9P8qu0XTVvpCTpF04pUZak6U4/edit
2. Click the "+" button at the bottom to add a new sheet
3. Name it "Newsletter"
4. Add these headers in row 1:
   ```
   Email | Discount Code | Timestamp
   ```
5. Format the header row (bold, gray background) - optional but nice

### Option 2: Automatic Setup

Run this command (after refreshing gcloud auth if needed):
```bash
node scripts/setup-newsletter-sheet.js
```

## 📧 What Happens When Someone Signs Up

1. **User enters email** in popup
2. **Unique discount code generated** (format: `THEOS5XXXXXX`)
3. **Email sent to user** with:
   - Discount code
   - Giveaway entry confirmation
   - Newsletter signup confirmation
4. **Email sent to you** with:
   - User's email
   - Their discount code
5. **Saved to Google Sheets** (if Newsletter tab exists)

## 💰 Discount Code Details

- **Format:** `THEOS5` + 6 random characters (e.g., `THEOS5ABC123`)
- **Discount:** 5% off any booking
- **Valid:** Through 2026
- **Usage:** Customer enters code when booking

## 🎯 Popup Behavior

- **Shows:** 2 seconds after homepage loads
- **Shows once:** Uses localStorage (won't show again for same user)
- **Dismissible:** "Maybe Later" button closes it
- **Session-based:** Won't show again in same browser session if dismissed

## 📝 Newsletter Emails

You can use the collected emails to:
- Send newsletter updates
- Announce giveaway winner
- Share special offers
- Send venue updates

All emails are stored in your Google Sheet for easy export!


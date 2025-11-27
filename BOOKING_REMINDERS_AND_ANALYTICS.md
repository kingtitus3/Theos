# Booking Reminders & Analytics Setup

## ✅ What's Been Added

### 1. Google Analytics 4
- **Component**: `components/analytics/GoogleAnalytics.tsx`
- **Integration**: Added to root layout
- **Event Tracking**: 
  - Contact form submissions
  - Tour bookings
  - Event bookings

### 2. Booking Reminders
- **Cron Job**: `/api/cron/booking-reminders` (runs daily at 9 AM)
- **Functionality**: 
  - Checks for events 24-25 hours away
  - Sends reminder emails automatically
  - Marks reminders as sent in calendar events
- **Confirmation Emails**: 
  - Tour bookings now send immediate confirmation
  - Event bookings now send immediate confirmation

## 🔧 Required Environment Variables

### For Vercel:

1. **Google Analytics** (optional but recommended):
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   - Get this from [Google Analytics](https://analytics.google.com/)
   - Create a GA4 property if you don't have one
   - Copy the Measurement ID (starts with `G-`)

2. **Cron Secret** (required for reminders):
   ```
   CRON_SECRET=your-random-secret-string
   ```
   - Generate a random string (e.g., use `openssl rand -hex 32`)
   - This secures your cron endpoint
   - Add to Vercel environment variables

## 📧 How Booking Reminders Work

1. **Daily Check**: Vercel Cron runs at 9 AM daily
2. **Event Detection**: Finds events 24-25 hours away
3. **Email Extraction**: Gets email from calendar event description
4. **Reminder Sent**: Sends personalized reminder email
5. **Marked**: Adds `REMINDER_SENT` to event description to prevent duplicates

## 📊 Analytics Events Tracked

- **Contact Form**: `submit` event with event type as label
- **Tour Booking**: `book_tour` event with date as label
- **Page Views**: Automatic via Google Analytics

## 🚀 Next Steps

1. **Set up Google Analytics**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a GA4 property
   - Copy the Measurement ID
   - Add `NEXT_PUBLIC_GA_ID` to Vercel

2. **Set up Cron Secret**:
   ```bash
   openssl rand -hex 32
   ```
   - Copy the output
   - Add as `CRON_SECRET` in Vercel

3. **Test Reminders**:
   - Create a test booking for tomorrow
   - Wait for the cron job to run (or trigger manually)
   - Verify reminder email is sent

## 🔍 Testing

### Test Analytics:
1. Open browser console
2. Submit a form
3. Check Network tab for `collect` requests to Google Analytics

### Test Reminders:
1. Create a test event for tomorrow
2. Manually trigger: `GET /api/cron/booking-reminders` with `Authorization: Bearer YOUR_CRON_SECRET`
3. Check email inbox for reminder

## 📝 Notes

- Reminders are sent 24 hours before events
- Confirmation emails are sent immediately upon booking
- Analytics only tracks if `NEXT_PUBLIC_GA_ID` is set
- Cron job requires `CRON_SECRET` to prevent unauthorized access


# Theos Event Venue Website

A high-converting, cinematic, mobile-first website for **Theos** — a historic brick event venue in downtown Galveston, Texas.

## Features

- **Cinematic Hero Section** with full-width background video
- **Comprehensive Event Information** including spaces, pricing, amenities, and floorplans
- **Interactive Gallery** with filterable categories
- **Virtual Tour** modal integration
- **Contact Forms** with validation (main inquiry + availability check)
- **Mobile-First Design** with responsive layouts
- **Smooth Animations** using Framer Motion
- **Accessible UI** with proper ARIA attributes and keyboard navigation

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ (managed via nvm)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  api/contact/route.ts    # Contact form API endpoint
  layout.tsx               # Root layout with fonts & providers
  page.tsx                 # Homepage with all sections
  globals.css              # Global styles & Tailwind directives

components/
  hero/Hero.tsx            # Cinematic hero with video
  layout/                   # Navbar, Footer, Container, SectionHeader
  sections/                 # All page sections (About, Spaces, Gallery, etc.)
  ui/                       # Reusable UI components (Button, Input, Modal, etc.)

lib/
  constants.ts              # All venue content & copy
  validation.ts             # Zod schemas for forms
  utils.ts                  # Utility functions (cn, scrollToTarget)

public/
  media/                    # Video files (hero.mp4, virtual-tour.mp4)
  images/                    # Image assets (spaces, gallery, logo)
  docs/                     # PDFs (floorplan.pdf)
```

## Customization

All venue-specific content is centralized in `lib/constants.ts`. Update:

- Hero content and stats
- About section copy
- Spaces descriptions
- Gallery images and categories
- Pricing packages
- Amenities list
- Testimonials
- FAQs
- Contact information

## Forms

The site includes two forms:

1. **Main Contact Form** (`/api/contact`) - Full inquiry form with all event details
2. **Availability Form** (in Pricing section) - Quick availability check

Both forms currently log to console. To integrate email:

1. Install an email service (e.g., Resend, SendGrid)
2. Update `/app/api/contact/route.ts` to send emails
3. Add environment variables for API keys

## Google Calendar Booking

Real-time booking and availability are powered by Google Calendar via OAuth 2.0 credentials.

### Setup for Google Workspace Account

1. **Create OAuth Credentials** (in Google Cloud Console):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select your project (or create one)
   - Navigate to **APIs & Services** → **Credentials**
   - Click **Create Credentials** → **OAuth client ID**
   - Application type: **Web application**
   - Authorized redirect URIs: `http://localhost`
   - Save the **Client ID** and **Client Secret**

2. **Enable Google Calendar API**:
   - Go to **APIs & Services** → **Library**
   - Search for "Google Calendar API"
   - Click **Enable**

3. **Get Calendar ID**:
   - Current calendar ID: `c_e5143b4edca37ee8df22060a96fab8b95eaaeb1061ee5adf07f265343030a66c@group.calendar.google.com`
   - For a shared calendar: find it in Google Calendar → Settings → Integrate calendar → Calendar ID
   - **Important**: Make sure the calendar is shared with the authenticated account (`bookings@theosgalveston.com`)

4. **Generate Refresh Token**:
   ```bash
   # Set your OAuth credentials
   export GOOGLE_OAUTH_CLIENT_ID="your-client-id"
   export GOOGLE_OAUTH_CLIENT_SECRET="your-client-secret"
   
   # Run the script
   node scripts/get-refresh-token.mjs
   ```
   - Copy the authorization URL and open it in a browser
   - Sign in with `bookings@theosgalveston.com`
   - Grant calendar permissions
   - Copy the `code` from the redirect URL
   - Paste it into the script to get your refresh token

### Environment Variables

Add the following to `.env.local`:

**For local development** (uses Application Default Credentials):
```
GOOGLE_CALENDAR_ID=c_e5143b4edca37ee8df22060a96fab8b95eaaeb1061ee5adf07f265343030a66c@group.calendar.google.com
```

**For Vercel/production** (requires OAuth credentials):
```
GOOGLE_CALENDAR_ID=c_e5143b4edca37ee8df22060a96fab8b95eaaeb1061ee5adf07f265343030a66c@group.calendar.google.com
GOOGLE_OAUTH_CLIENT_ID=your-client-id
GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
GOOGLE_OAUTH_REFRESH_TOKEN=your-refresh-token
```

Deploy the same variables in Vercel.

### API Routes

- `POST /api/availability` &mdash; checks if a date block (default 8 hours starting 10am) is open.
- `POST /api/book-tour` &mdash; schedules a 60-minute site tour.
- `POST /api/book-event` &mdash; books multi-hour events and optionally flags Loft Suite interest (auto checks availability).

### External Calendar Sync

Use the private iCal feed below when connecting Airbnb, Peerspace, or other OTA platforms so all bookings stay in sync:

```
https://calendar.google.com/calendar/ical/c_e5143b4edca37ee8df22060a96fab8b95eaaeb1061ee5adf07f265343030a66c%40group.calendar.google.com/private-3fb3d75e92f7921102b3126a50313d09/basic.ics
```

**Calendar Embed** (for displaying on website):
```html
<iframe src="https://calendar.google.com/calendar/embed?src=c_e5143b4edca37ee8df22060a96fab8b95eaaeb1061ee5adf07f265343030a66c%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
```

## Media Assets

Replace placeholder files with real assets:

- `/public/media/hero.mp4` - Hero background video
- `/public/media/virtual-tour.mp4` - Virtual tour video
- `/public/images/spaces/*.jpg` - Space photos
- `/public/images/gallery/*.jpg` - Gallery images
- `/public/images/floorplan.jpg` - Floorplan preview
- `/docs/floorplan.pdf` - Downloadable floorplan

## Deployment

Ready to deploy on **Vercel**:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

Or deploy to any Node.js hosting platform that supports Next.js.

## License

Private project for Theos Event Venue.


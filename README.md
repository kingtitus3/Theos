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

Real-time booking and availability are powered by Google Calendar via service account credentials.

### Environment Variables

Add the following to `.env.local` (escaping newline characters in the private key):

```
GOOGLE_CALENDAR_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_CALENDAR_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOURKEY\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=c_4a0d6a426088164c5c84add3d0a6b0fa2538caa9eacb30ca64646fe930c0f258@group.calendar.google.com
```

Share the calendar with the service account email and deploy the same variables in Vercel.

### API Routes

- `POST /api/availability` &mdash; checks if a date block (default 8 hours starting 10am) is open.
- `POST /api/book-tour` &mdash; schedules a 60-minute site tour.
- `POST /api/book-event` &mdash; books multi-hour events and optionally flags Loft Suite interest (auto checks availability).

### External Calendar Sync

Use the private iCal feed below when connecting Airbnb, Peerspace, or other OTA platforms so all bookings stay in sync:

```
https://calendar.google.com/calendar/ical/c_4a0d6a426088164c5c84add3d0a6b0fa2538caa9eacb30ca64646fe930c0f258%40group.calendar.google.com/private-40c55da839ebdddd1bb67643cfda6234/basic.ics
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


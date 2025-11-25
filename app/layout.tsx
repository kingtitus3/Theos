import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { ToastProvider } from "@/components/ui/Toast";
import { FAQS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://theos.live"),
  title: "Theos – Historic Brick Event Venue in Downtown Galveston",
  description:
    "Theos is a 3,200 sq ft historic brick event venue with an upstairs Loft Suite in downtown Galveston. Perfect for weddings, social events, corporate gatherings, and styled shoots.",
  keywords: [
    "Galveston wedding venue",
    "Galveston event space",
    "downtown Galveston venue",
    "brick event hall",
    "loft event space Galveston",
    "Galveston loft suite",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://theos.live",
    title: "Theos – Historic Brick Event Venue in Downtown Galveston",
    description:
      "3,200 sq ft brick event hall with an upstairs Loft Suite in downtown Galveston. Perfect for weddings, social events, and corporate gatherings.",
    siteName: "Theos",
    images: [
      {
        url: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/spaces/main-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Theos main brick hall in downtown Galveston.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theos – Historic Brick Event Venue in Downtown Galveston",
    description:
      "3,200 sq ft brick event hall with an upstairs Loft Suite for weddings, social events, and corporate gatherings.",
    images: [
      "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/spaces/main-hall.jpg",
    ],
  },
  alternates: {
    canonical: "https://theos.live",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Theos",
  url: "https://theos.live",
  description:
    "Theos is a 3,200 sq ft historic brick event venue with an upstairs Loft Suite in downtown Galveston. Perfect for weddings, social events, corporate gatherings, and styled shoots.",
  telephone: "+1-409-765-5539",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2527 Market St",
    addressLocality: "Galveston",
    addressRegion: "TX",
    postalCode: "77550",
    addressCountry: "US",
  },
  image: [
    "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/spaces/main-hall.jpg",
    "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/social-1.jpg",
  ],
  sameAs: [
    "https://www.instagram.com/", // update with real handle
    "https://www.facebook.com/", // update with real handle
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Loft Suite",
      value: true,
      description: "Private upstairs 1 bed / 1 bath Loft Suite available as an add-on.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-sand text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <Navbar />
          <main className="pt-14 sm:pt-16">{children}</main>
          <Footer />
        </ToastProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

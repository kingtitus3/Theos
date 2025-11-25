import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Theos | Historic Galveston Event Venue",
  description:
    "A cinematic brick event venue in downtown Galveston with an 80 × 40 hall and private Loft Suite add-on.",
  metadataBase: new URL("https://theos.example.com"),
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Theos | Historic Galveston Event Venue",
    description:
      "Historic brick, warm lighting, and flexible layouts for weddings, social, and corporate events in downtown Galveston.",
    images: ["/images/spaces/main-hall.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-sand text-charcoal">
        <ToastProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

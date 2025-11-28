import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpacesSection } from "@/components/sections/SpacesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VirtualTourSection } from "@/components/sections/VirtualTourSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { AccommodationsSection } from "@/components/sections/AccommodationsSection";
import { FloorplanSection } from "@/components/sections/FloorplanSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import { GiveawayPopup } from "@/components/popup/GiveawayPopup";

export default function HomePage() {
  return (
    <>
      <GiveawayPopup />
      <Hero />
      <AboutSection />
      <SpacesSection />
      <GallerySection />
      <VirtualTourSection />
      <PricingSection />
      <BookingSection />
      <AmenitiesSection />
      <AccommodationsSection />
      <FloorplanSection />
      <FAQSection />
      <ContactSection />
      <FloatingChatButton />
    </>
  );
}

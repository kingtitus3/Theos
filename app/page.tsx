import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpacesSection } from "@/components/sections/SpacesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VirtualTourSection } from "@/components/sections/VirtualTourSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { FloorplanSection } from "@/components/sections/FloorplanSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SpacesSection />
      <GallerySection />
      <VirtualTourSection />
      <PricingSection />
      <AmenitiesSection />
      <FloorplanSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

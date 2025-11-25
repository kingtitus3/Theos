import {
  MapPin,
  Building2,
  Home,
  Table2,
  Volume2,
  Wifi,
  Flame,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { AMENITIES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  BuildingOffice2: Building2,
  HomeModern: Home,
  TableCells: Table2,
  SpeakerWave: Volume2,
  Wifi,
  Fire: Flame,
  Truck,
};

export const AmenitiesSection = () => (
  <section id="amenities" className="bg-white py-12 sm:py-16 lg:py-24">
    <Container>
      <SectionHeader
        eyebrow="Amenities"
        title="Included comforts"
        description="Everything you need for a seamless experience, plus the freedom to bring in your dream team."
      />
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {AMENITIES.map((item) => {
          const Icon = iconMap[item.icon] ?? MapPin;
          return (
            <Card key={item.label} className="flex flex-col items-start gap-3">
              <Icon size={28} className="text-accent-brick" />
              <p className="text-sm font-semibold text-charcoal">{item.label}</p>
            </Card>
          );
        })}
      </div>
    </Container>
  </section>
);

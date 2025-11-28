import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SPACES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Theos Loft Suite – Galveston Loft Venue & Getting-Ready Space",
  description:
    "The Loft Suite at Theos is a private 1 bed / 1 bath apartment above the main hall in downtown Galveston, perfect for getting-ready, overnight stays, or VIP hosting.",
};

export default function LoftSuitePage() {
  const loft = SPACES.find((s) => s.id === "loft-suite");

  return (
    <section className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Theos Loft Suite"
          title="A private Loft Suite above the main brick hall"
          description="Get ready, stay overnight, or host VIPs in the Loft Suite — a private 1 bed / 1 bath apartment directly above the main event space."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Loft Suite highlights</h3>
            <ul className="space-y-2 text-sm text-charcoal/80">
              <li>• 1 bed / 1 bath private apartment upstairs from the main hall</li>
              <li>• Ideal for getting-ready photos and pre-ceremony calm</li>
              <li>• Great as an overnight stay for couples or VIP guests</li>
              <li>• Includes bedroom, full bathroom, kitchen, and lounge area</li>
              <li>• Available as an add-on with select event bookings</li>
            </ul>
            <p className="text-sm text-charcoal/80">
              The Loft Suite keeps your personal space separate from the event, while still being
              just a few steps away. It&apos;s one of the easiest ways to make your day feel
              elevated and stress-free.
            </p>
            <ScrollToContactButton
              label="Ask About Loft Suite Availability"
              className="mt-2"
            />
          </div>
          <div className="space-y-6">
            {loft && (
              <Card>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">{loft.name}</h3>
                  <p className="text-sm text-charcoal/70">{loft.description}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                    {loft.capacity}
                  </p>
                </div>
              </Card>
            )}
            <p className="text-xs text-charcoal/60">
              Loft Suite pricing typically ranges from <strong>$300–$500</strong> depending on your
              date and whether you&apos;re using it for getting-ready only or an overnight stay.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
          <p className="text-sm text-charcoal/70 mb-3">
            Planning your wedding weekend? Our comprehensive guide includes lodging recommendations, vendor tips, and everything you need to know about planning in Galveston.
          </p>
          <Button variant="ghost" size="sm" className="border border-charcoal/20" asChild>
            <Link href="/blog/galveston-wedding-guide-2026">
              Read Galveston Wedding Guide →
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}



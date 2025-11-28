import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PRICING_BREAKDOWN } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events at Theos – Galveston Event Venue",
  description:
    "Host social events, birthdays, showers, and parties at Theos, a 3,200 sq ft brick event space in downtown Galveston.",
};

export default function EventsPage() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Social & Private Events"
          title="A downtown Galveston event space for parties and celebrations"
          description="From birthdays and showers to rehearsal dinners and after-parties, Theos gives you a cinematic brick backdrop with flexible layouts and bring-your-own-vendor freedom."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Perfect for social gatherings</h3>
            <p className="text-charcoal/80">
              The single-room layout keeps everyone in the mix, whether you&apos;re hosting a
              milestone birthday, engagement party, shower, or after-party. Use the entry for
              welcome drinks, stage the bar and DJ in the back, and let guests flow naturally
              through the 80 × 40 hall.
            </p>
            <ul className="space-y-2 text-sm text-charcoal/80">
              <li>• Flexible layouts for cocktail-style or seated events</li>
              <li>• Bring your own caterer, bar, and décor</li>
              <li>• Central downtown location near hotels and nightlife</li>
              <li>• Optional Loft Suite for getting-ready or overnight stay</li>
            </ul>
            <ScrollToContactButton label="Book a Tour for My Event" className="mt-2" />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Event pricing overview</h3>
            <p className="text-sm text-charcoal/80">
              Most social events at Theos land between <strong>$2,000–$4,000</strong> depending on
              day of week, hours, and Loft Suite usage. Here&apos;s how popular timeframes tend to
              break down:
            </p>
            <div className="space-y-3">
              {PRICING_BREAKDOWN.packages.slice(1, 4).map((pkg) => (
                <Card key={pkg.name}>
                  <div className="space-y-1">
                    <h4 className="font-medium">{pkg.name}</h4>
                    <p className="text-sm text-accent-brick">{pkg.price}</p>
                    <ul className="text-sm text-charcoal/70">
                      {pkg.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                    {pkg.addOns && (
                      <ul className="text-xs text-charcoal/60">
                        {pkg.addOns.map((addOn) => (
                          <li key={addOn}>+ {addOn}</li>
                        ))}
                      </ul>
                    )}
                    {pkg.notes && <p className="text-xs text-charcoal/60">{pkg.notes}</p>}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
          <p className="text-sm text-charcoal/70 mb-3">
            Planning a Galveston event? Our comprehensive wedding guide includes vendor recommendations, budgeting tips, and planning resources that apply to all types of events.
          </p>
          <Button variant="ghost" size="sm" className="border border-charcoal/20" asChild>
            <Link href="/blog/galveston-wedding-guide-2026">
              Read Event Planning Guide →
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}



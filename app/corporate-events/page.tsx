import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PRICING_BREAKDOWN } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Events at Theos – Galveston Corporate Event Venue",
  description:
    "Host corporate mixers, offsites, and client events at Theos, a 3,200 sq ft brick event hall in downtown Galveston.",
};

export default function CorporateEventsPage() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Corporate & Brand Events"
          title="A flexible brick venue for corporate events in Galveston"
          description="Use Theos as a backdrop for client mixers, offsites, team celebrations, and brand activations in downtown Galveston."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Make your next event feel intentional</h3>
            <p className="text-charcoal/80">
              Theos offers a neutral-yet-charactered backdrop for brand events and corporate
              gatherings. Set up presentation seating, cocktail rounds, or a hybrid layout, then
              lean on the brick, lighting, and simple footprint to keep the focus on your guests
              and content.
            </p>
            <ul className="space-y-2 text-sm text-charcoal/80">
              <li>• 3,200 sq ft open hall for keynotes, mixers, or breakouts</li>
              <li>• Basic sound system included; bring your own AV team as needed</li>
              <li>• Simple load-in and vendor access in downtown Galveston</li>
              <li>• Loft Suite available as a green room or VIP space</li>
            </ul>
            <ScrollToContactButton
              label="Plan a Corporate Event at Theos"
              className="mt-2"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Corporate event ranges</h3>
            <p className="text-sm text-charcoal/80">
              Corporate events typically fall between <strong>$2,500–$5,000</strong> depending on
              the length of rental, day of week, and specific production needs. Packages give you a
              clear starting point:
            </p>
            <div className="space-y-3">
              {PRICING_BREAKDOWN.packages.slice(0, 3).map((pkg) => (
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
            Planning a corporate event in Galveston? Our guide includes vendor recommendations, venue insights, and planning tips that can help with any event type.
          </p>
          <Link
            href="/blog/galveston-wedding-guide-2026"
            className="inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-3 py-1.5 text-sm bg-transparent text-charcoal border border-charcoal/20 hover:bg-charcoal/5"
          >
            Read Event Planning Guide →
          </Link>
        </div>
      </Container>
    </section>
  );
}



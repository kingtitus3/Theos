import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SPACES, PRICING_BREAKDOWN } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weddings at Theos – Galveston Wedding Venue",
  description:
    "Host your Galveston wedding at Theos, a 3,200 sq ft historic brick hall with an upstairs Loft Suite in downtown Galveston.",
};

export default function WeddingsPage() {
  const mainHall = SPACES.find((s) => s.id === "main-hall");
  const loft = SPACES.find((s) => s.id === "loft-suite");

  return (
    <section className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Weddings at Theos"
          title="A brick-walled wedding venue in downtown Galveston"
          description="Exchange vows in an 80 × 40 historic brick hall with warm lighting, then move effortlessly into cocktails and dancing. Add the Loft Suite upstairs for getting-ready, overnight stays, or a quiet retreat during your day."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Why couples choose Theos</h3>
            <p className="text-charcoal/80">
              Theos blends old-town Galveston character with a clean, flexible layout that works for
              ceremonies, seated dinners, and late-night dance floors. The single-room footprint
              keeps everyone together while still giving you room to stage each part of the day.
            </p>
            <ul className="space-y-2 text-sm text-charcoal/80">
              <li>• 3,200 sq ft (80 × 40) historic brick hall in downtown Galveston</li>
              <li>• Up to 180 guests standing, 120–140 for seated receptions</li>
              <li>• Bring your own licensed caterer, bar, planner, and DJ</li>
              <li>• Optional Loft Suite upstairs for getting-ready or overnight stay</li>
              <li>• Steps from the Strand, hotels, bars, and late-night food</li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ScrollToContactButton label="Book a Wedding Tour" className="mt-2" />
              <Button
                variant="ghost"
                size="sm"
                className="border border-charcoal/20"
                asChild
              >
                <Link href="/blog/galveston-wedding-guide-2026">
                  Read Our Wedding Guide →
                </Link>
              </Button>
            </div>

          <div className="space-y-6">
            {mainHall && (
              <Card className="overflow-hidden">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">{mainHall.name}</h3>
                  <p className="text-sm text-charcoal/70">{mainHall.description}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                    {mainHall.capacity}
                  </p>
                </div>
              </Card>
            )}
            {loft && (
              <Card className="overflow-hidden">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">{loft.name}</h3>
                  <p className="text-sm text-charcoal/70">{loft.description}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                    {loft.capacity}
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <h3 className="font-serif text-2xl">Wedding investment at Theos</h3>
          <p className="text-sm text-charcoal/80">{PRICING_BREAKDOWN.snapshot.text}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {PRICING_BREAKDOWN.packages.slice(0, 2).map((pkg) => (
              <Card key={pkg.name}>
                <div className="space-y-2">
                  <h4 className="font-medium">{pkg.name}</h4>
                  <p className="text-sm text-accent-brick">{pkg.price}</p>
                  <ul className="space-y-1 text-sm text-charcoal/70">
                    {pkg.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                  {pkg.notes && <p className="text-xs text-charcoal/60">{pkg.notes}</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}



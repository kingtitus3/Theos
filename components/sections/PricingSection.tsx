import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import { PRICING_BREAKDOWN } from "@/lib/constants";

export const PricingSection = () => {
  return (
    <section id="pricing" className="bg-sand py-12 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title={PRICING_BREAKDOWN.headline}
          description={PRICING_BREAKDOWN.subheadline}
        />
        <div className="space-y-8">
          <p className="text-sm text-charcoal/80">{PRICING_BREAKDOWN.snapshot.text}</p>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {PRICING_BREAKDOWN.packages.map((pkg) => (
              <Card key={pkg.name} className="h-full">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl">{pkg.name}</h3>
                    <p className="text-sm text-accent-brick">{pkg.price}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {pkg.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                  {pkg.addOns && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Add-ons</p>
                      <ul className="mt-1 space-y-1 text-sm text-charcoal/70">
                        {pkg.addOns.map((item) => (
                          <li key={item}>+ {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.notes && <p className="text-sm text-charcoal/60">{pkg.notes}</p>}
                </div>
              </Card>
            ))}
            <Card className="h-full border border-accent-brick bg-white">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-brick">Add-on</p>
                <h3 className="font-serif text-2xl">{PRICING_BREAKDOWN.loftSuite.name}</h3>
                <p className="text-sm text-accent-brick">{PRICING_BREAKDOWN.loftSuite.price}</p>
                <p className="text-sm text-charcoal/80">{PRICING_BREAKDOWN.loftSuite.description}</p>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  {PRICING_BREAKDOWN.loftSuite.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-charcoal/70">
            {PRICING_BREAKDOWN.notes.map((note) => (
              <p key={note}>• {note}</p>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-charcoal/70">
              Ready for exact pricing? Share your date, guest count, and Loft Suite needs and we’ll
              respond quickly from the contact form below.
            </p>
            <ScrollToContactButton
              label="Request Tour & Availability"
              className="w-full sm:w-auto"
              variant="outline"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

"use client";

import { ACCOMMODATIONS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { scrollToTarget } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export const AccommodationsSection = () => {
  return (
    <section id="accommodations" className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Accommodations"
          title={ACCOMMODATIONS.heading}
          description={ACCOMMODATIONS.description}
        />
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {ACCOMMODATIONS.options.map((option) => (
            <Card
              key={option.name}
              className={`relative flex flex-col ${
                option.highlight
                  ? "border-2 border-accent-brick bg-accent-brick/5"
                  : "bg-white"
              }`}
            >
              {option.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-accent-brick px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  On-Site
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
                    {option.type}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-charcoal">{option.name}</h3>
                </div>
                <p className="text-sm text-charcoal/70">{option.description}</p>
                <ul className="space-y-1.5 text-sm text-charcoal/70">
                  {option.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  {option.link ? (
                    <Button
                      asChild
                      variant={option.highlight ? "default" : "ghost"}
                      className="w-full"
                    >
                      <a
                        href={option.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View on Airbnb
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => scrollToTarget("#contact")}
                      variant={option.highlight ? "default" : "ghost"}
                      className="w-full"
                    >
                      Book Loft Suite
                    </Button>
                  )}
                  <p className="mt-2 text-center text-xs text-charcoal/60">{option.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-charcoal/5 p-6 text-center">
          <p className="text-sm text-charcoal/80">
            <strong>Pro tip:</strong> Book the Loft Suite for getting ready, and reserve the nearby Airbnbs for your wedding party or family. Everything is within steps of each other, making your event weekend seamless and stress-free.
          </p>
        </div>
      </Container>
    </section>
  );
};


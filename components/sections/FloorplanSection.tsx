"use client";

import Image from "next/image";
import { useState } from "react";
import { CAPACITY_CHART, FLOORPLAN_CONTENT, FLOORPLAN_NOTES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";

export const FloorplanSection = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
  <section id="floorplan" className="bg-sand py-16 sm:py-24">
    <Container>
      <SectionHeader
        eyebrow="Floorplan"
        title={FLOORPLAN_CONTENT.heading}
        description={FLOORPLAN_CONTENT.description}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="space-y-6">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-charcoal/5 flex items-center justify-center">
            {imageFailed ? (
              <div className="text-center">
                <p className="text-xl font-serif text-charcoal/40 mb-2">Coming Soon</p>
                <p className="text-sm text-charcoal/30 uppercase tracking-wider">Floorplan Coming Soon</p>
              </div>
            ) : (
              <Image 
                src={FLOORPLAN_CONTENT.imageSrc} 
                alt="Floorplan" 
                width={800} 
                height={600} 
                className="h-full w-full object-cover" 
                onError={() => setImageFailed(true)}
                unoptimized
              />
            )}
          </div>
          <a
            href={FLOORPLAN_CONTENT.downloadHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-charcoal/20 bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal/60"
          >
            {FLOORPLAN_CONTENT.downloadLabel}
          </a>
          <ul className="space-y-2 text-sm text-charcoal/70">
            {FLOORPLAN_NOTES.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-6">
          <h3 className="font-serif text-2xl">Capacity quick view</h3>
          <dl className="space-y-4">
            {CAPACITY_CHART.map((row) => (
              <div key={row.layout} className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                <dt className="text-sm text-charcoal/70">{row.layout}</dt>
                <dd className="text-base font-semibold text-charcoal">{row.maxGuests}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </Container>
  </section>
  );
};

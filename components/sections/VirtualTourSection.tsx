"use client";

import { useState } from "react";
import { VIRTUAL_TOUR_CONTENT } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export const VirtualTourSection = () => {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
  <section id="virtual-tour" className="bg-white py-16 sm:py-24">
    <Container>
      <Badge className="mx-auto mb-4 bg-accent-brick/10 text-accent-brick">
        {VIRTUAL_TOUR_CONTENT.badge}
      </Badge>
      <SectionHeader
        eyebrow="Virtual tour"
        title={VIRTUAL_TOUR_CONTENT.heading}
        description={VIRTUAL_TOUR_CONTENT.description}
      />
      <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal">
        <div className="relative aspect-video w-full flex items-center justify-center">
          {videoFailed ? (
            <div className="absolute inset-0 flex items-center justify-center text-center text-parchment">
              <div>
                <p className="text-2xl font-serif mb-2">Coming Soon</p>
                <p className="text-sm uppercase tracking-wider">Video Coming Soon</p>
              </div>
            </div>
          ) : (
            <video 
              className="h-full w-full" 
              controls 
              poster="/images/spaces/main-hall.jpg"
              onError={() => setVideoFailed(true)}
            >
              <source src={VIRTUAL_TOUR_CONTENT.videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </Container>
  </section>
  );
};

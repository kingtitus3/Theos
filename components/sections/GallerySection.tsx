"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalleryFilter } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";

export const GallerySection = () => {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const filteredItems =
    filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handleImageError = (src: string) => {
    setFailedImages((prev) => new Set(prev).add(src));
  };

  return (
    <section id="gallery" className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="Visual stories from Theos"
          description="Warm brick, golden light, and gatherings that feel cinematic. Filter to explore the vibe for your event."
        />
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {GALLERY_FILTERS.map((option) => (
            <button
              key={option}
              className={cn(
                "rounded-full border px-5 py-2 text-sm",
                filter === option
                  ? "border-charcoal bg-charcoal text-parchment"
                  : "border-charcoal/20 text-charcoal hover:border-charcoal/60",
              )}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.length === 0 ? (
            <figure className="group overflow-hidden rounded-3xl border border-dashed border-charcoal/30 bg-charcoal/5 px-6 py-10 text-center sm:col-span-2 lg:col-span-3">
              <p className="text-2xl font-serif text-charcoal/40 mb-2">Coming Soon</p>
              <p className="text-sm text-charcoal/40 uppercase tracking-[0.2em]">
                Photos coming soon for this category
              </p>
            </figure>
          ) : (
            filteredItems.map((item) => (
              <figure key={item.src} className="group overflow-hidden rounded-3xl">
                <div className="relative h-80 w-full bg-charcoal/5 flex items-center justify-center">
                  {failedImages.has(item.src) ? (
                    <div className="text-center">
                      <p className="text-xl font-serif text-charcoal/40 mb-2">Coming Soon</p>
                      <p className="text-sm text-charcoal/30 uppercase tracking-wider">
                        Photo Coming Soon
                      </p>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={600}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={() => handleImageError(item.src)}
                      unoptimized
                    />
                  )}
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-charcoal/60">
                  {item.category}
                </figcaption>
              </figure>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

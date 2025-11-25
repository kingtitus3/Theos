import Image from "next/image";
import { SPACES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const SpacesSection = () => (
  <section id="spaces" className="bg-white py-16 sm:py-24">
    <Container>
      <SectionHeader
        eyebrow="Spaces"
        title="The spaces inside Theos"
        description="Choose the main brick hall for your celebration and elevate the experience with the private Loft Suite."
      />
            <div className="grid gap-8 md:grid-cols-2">
              {SPACES.map((space: (typeof SPACES)[number]) => (
          <Card key={space.id} className="overflow-hidden p-0">
            <div className="relative h-64 w-full bg-charcoal/5 flex items-center justify-center">
              {space.id === "loft-suite" ? (
                <div className="text-center">
                  <p className="text-2xl font-serif text-charcoal/40 mb-2">Coming Soon</p>
                  <p className="text-sm text-charcoal/30 uppercase tracking-wider">Photo Coming Soon</p>
                </div>
              ) : (
                      <Image
                        src={space.image}
                        alt={space.alt ?? space.name}
                  fill 
                  className="object-cover" 
                  unoptimized
                  priority={space.id === "main-hall"}
                />
              )}
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{space.name}</h3>
                <span className="text-sm text-charcoal/60">{space.capacity}</span>
              </div>
              <p className="text-charcoal/70">{space.description}</p>
              <div className="flex flex-wrap gap-2">
                {space.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

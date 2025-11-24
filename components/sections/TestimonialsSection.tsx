import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";

export const TestimonialsSection = () => (
  <section id="testimonials" className="bg-white py-16 sm:py-24">
    <Container>
      <SectionHeader
        eyebrow="Kind words"
        title="Stories from couples & teams"
        description="People fall hard for the warm brick glow and flexible layout."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name} className="flex h-full flex-col justify-between bg-sand/60">
            <p className="text-lg text-charcoal">“{testimonial.quote}”</p>
            <div className="mt-6 text-sm text-charcoal/70">
              <p className="font-semibold">{testimonial.name}</p>
              <p>{testimonial.eventType}</p>
              <p>{testimonial.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

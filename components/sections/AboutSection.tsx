import { ABOUT_CONTENT } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

export const AboutSection = () => (
  <section id="about" className="bg-sand py-12 sm:py-16 lg:py-24">
    <Container>
      <SectionHeader
        eyebrow="About the space"
        title={ABOUT_CONTENT.heading}
        description={ABOUT_CONTENT.body[0]}
      />
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
        <div className="space-y-6 text-base text-charcoal/80">
          {ABOUT_CONTENT.body.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-3xl bg-white/80 p-6 shadow-sm">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-accent-brick">
              At a glance
            </h3>
            <dl className="mt-6 space-y-4 text-sm">
              {Object.entries(ABOUT_CONTENT.atAGlance).map(([label, value]) => (
                <div key={label} className="grid grid-cols-3 gap-4">
                  <dt className="text-charcoal/60 capitalize">{label}</dt>
                  <dd className="col-span-2 font-medium text-charcoal">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-[0.3em] text-accent-brick">
              Events we host
            </h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {ABOUT_CONTENT.eventTypes.map((event) => (
                <li key={event} className="rounded-2xl bg-sand px-4 py-3">
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

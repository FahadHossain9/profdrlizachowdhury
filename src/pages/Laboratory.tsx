import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';
import { PlaceholderCard } from '../components/content/PlaceholderCard';
import { labFeatures } from '../data/lab';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Laboratory() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-deep text-bg-warm">
        <Container className="relative grid grid-cols-1 items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5">
              <p className="eyebrow text-bg-warm/70">THE LABORATORY</p>
              <h1 className="display-serif-xl">Where embryos are protected like patients.</h1>
              <p className="body-large text-bg-warm/80 max-w-prose">
                The Uttara Fertility Centre laboratory is the most consequential room in this practice.
                Outcomes are decided here. The equipment, the cleanroom standard, and the team have all
                been chosen to one specification: international.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderCard
              variant="video"
              aspect="4-3"
              label="Lab entrance — IVF LAB / Entry Restricted glass doors"
              specRef="Plan §4.3 · clip 11.56.25 (trimmed to 8s)"
              className="bg-bg-warm/5 border-bg-warm/30"
            />
          </Reveal>
        </Container>
      </section>

      {labFeatures.map((feature, idx) => (
        <Section key={feature.slug} tone={idx % 2 === 0 ? 'warm' : 'cream'} spacing="xl">
          <Container>
            <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <Reveal className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-5">
                  <p className="eyebrow">FEATURE 0{idx + 1}</p>
                  <h2 className="display-serif-l text-ink-body">{feature.title}</h2>
                  <p className="font-serif text-2xl text-brand-purpleDark leading-snug">{feature.oneLine}</p>
                  <p className="body-large body-muted max-w-prose">{feature.body}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08} className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <PlaceholderCard
                  variant="video"
                  aspect="4-3"
                  label={`${feature.title} — ambient loop`}
                  specRef={`Plan §4.3 · ${feature.videoSlot}`}
                />
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <FinalCTA />
    </>
  );
}

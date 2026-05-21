import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { journeyStages } from '../data/journey';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Journey() {
  return (
    <>
      <SectionHero
        eyebrow="YOUR JOURNEY"
        title="Knowing what to expect makes the journey easier."
        body="From the first phone call to the result — and beyond — what actually happens at each stage."
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <Stagger className="space-y-6" staggerChildren={0.06}>
            {journeyStages.map((stage) => (
              <StaggerItem key={stage.index}>
                <article className="card-base grid grid-cols-1 gap-6 p-7 md:grid-cols-[140px_1fr]">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-bg-warm text-lg font-semibold">
                      0{stage.index}
                    </span>
                    <p className="mt-3 text-xs uppercase tracking-wider text-brand-purpleDark">{stage.duration}</p>
                  </div>
                  <div>
                    <h2 className="h2 text-ink-body">{stage.title}</h2>
                    <p className="mt-1 text-base body-muted italic">{stage.subtitle}</p>
                    <ul className="mt-4 space-y-2">
                      {stage.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 body text-ink-body">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <Section tone="cream" spacing="lg">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center space-y-3">
              <p className="eyebrow">THROUGHOUT</p>
              <h2 className="h1">Mental health is part of the plan.</h2>
              <p className="body-large body-muted">
                Fertility treatment is one of the most emotionally demanding experiences a couple can go
                through. We acknowledge that openly and design support accordingly — a direct line to the
                team, structured emotional support during the two-week wait, and referrals where useful.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}

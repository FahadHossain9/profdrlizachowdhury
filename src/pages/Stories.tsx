import { Link } from 'react-router-dom';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Stagger, StaggerItem } from '../components/motion/Reveal';
import { stories } from '../data/stories';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Stories() {
  return (
    <>
      <SectionHero
        eyebrow="PATIENT STORIES"
        title="Every family has a story. These are a few."
        body="Anonymised, consented, voice-of-patient. The narratives below are demo placeholders — real stories will be sourced from patients who agree to share, with full control over what is published."
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.06}>
            {stories.map((s) => (
              <StaggerItem key={s.slug}>
                <Link to={`/stories/${s.slug}`} className="card-base flex h-full flex-col gap-4 p-6">
                  <span className="rounded-full bg-bg-cream px-2 py-1 self-start text-[10px] font-medium uppercase tracking-wider text-ink-muted">Demo</span>
                  <p className="pullquote text-ink-body line-clamp-5 text-2xl">
                    &ldquo;{s.pullQuote}&rdquo;
                  </p>
                  <div className="mt-auto pt-3 border-t border-line">
                    <p className="text-xs body-muted">— {s.initials}</p>
                    <p className="mt-1 text-xs text-brand-purple font-semibold">{s.treatment} · {s.year}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}

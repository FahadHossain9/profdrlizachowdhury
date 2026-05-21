import { useParams, Navigate } from 'react-router-dom';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';
import { stories } from '../data/stories';
import { FinalCTA } from '../components/content/FinalCTA';

export default function StoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);
  if (!story) return <Navigate to="/stories" replace />;

  return (
    <>
      <SectionHero
        eyebrow={`${story.treatment.toUpperCase()} · ${story.year}`}
        title={story.headline}
        align="left"
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <div className="mx-auto max-w-prose space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-bg-cream px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                Demo story · structural placeholder
              </div>
            </Reveal>
            <Reveal>
              <p className="pullquote text-ink-deep border-l-2 border-accent-gold pl-5">
                &ldquo;{story.pullQuote}&rdquo;
              </p>
            </Reveal>
            <Reveal>
              <div className="space-y-5 body-large text-ink-body whitespace-pre-line">{story.narrative}</div>
            </Reveal>
            <Reveal>
              <div className="mt-10 rounded-xl border border-line bg-bg-cream p-6">
                <p className="eyebrow mb-2">CLINICAL REFLECTION</p>
                <p className="body text-ink-body italic">{story.closingFromDoctor}</p>
                <p className="mt-3 text-xs body-muted">— Dr. Liza Chowdhury</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs body-muted text-center">— {story.initials}</p>
            </Reveal>
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}

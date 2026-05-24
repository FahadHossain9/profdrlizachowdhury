import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Stagger, StaggerItem } from '../components/motion/Reveal';
import { Pagination } from '../components/admin/AdminPrimitives';
import { useResource, storyStore } from '../lib/store';
import { FinalCTA } from '../components/content/FinalCTA';

const PAGE_SIZE = 9;

export default function Stories() {
  const stories = useResource(storyStore);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(stories.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageStories = useMemo(
    () => stories.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE),
    [stories, safePage],
  );
  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow="PATIENT STORIES"
        title="Every family has a story. These are a few."
        body="Anonymised, consented, voice-of-patient. The narratives below are demo placeholders — real stories will be sourced from patients who agree to share, with full control over what is published."
        crumbs={[{ label: 'Stories' }]}
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.06}>
            {pageStories.map((s) => (
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
          {totalPages > 1 && (
            <Pagination
              page={safePage}
              totalPages={totalPages}
              onPage={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-10"
            />
          )}
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}

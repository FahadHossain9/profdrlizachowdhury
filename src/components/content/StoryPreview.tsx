import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { stories } from '../../data/stories';
import { cn } from '../../lib/cn';

export function StoryPreview() {
  const { t, lang } = useLanguage();
  const featured = stories.slice(0, 2);

  return (
    <Section tone="cream" spacing="xl">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.stories.eyebrow}</p>
              <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>{t.stories.title}</h2>
            </div>
            <Link to="/stories" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.stories.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" staggerChildren={0.08}>
          {featured.map((s) => (
            <StaggerItem key={s.slug}>
              <Link to={`/stories/${s.slug}`} className="card-base flex h-full flex-col gap-5 p-7">
                <p className="pullquote text-ink-body">
                  &ldquo;{s.pullQuote}&rdquo;
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs body-muted">
                  <span>— {s.initials} · {s.treatment} · {s.year}</span>
                  <span className="rounded-full bg-bg-cream px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-muted">Demo</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <p className={cn('mt-6 text-xs body-muted text-center', lang === 'bn' && 'font-bangla')}>
          {t.stories.placeholderNote}
        </p>
      </Container>
    </Section>
  );
}

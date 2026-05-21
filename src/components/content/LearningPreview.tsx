import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, BookOpen } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { videos } from '../../data/videos';
import { articles } from '../../data/articles';
import { cn } from '../../lib/cn';

export function LearningPreview() {
  const { t, lang } = useLanguage();
  const featuredVideos = videos.slice(0, 3);
  const featuredArticle = articles[0];

  return (
    <Section tone="warm" spacing="xl">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.learning.eyebrow}</p>
              <h2 className={cn('display-l', lang === 'bn' && 'font-bangla')}>{t.learning.title}</h2>
            </div>
            <Link to="/learning" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.learning.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-4" staggerChildren={0.06}>
          {featuredVideos.map((v) => (
            <StaggerItem key={v.idx}>
              <Link to={`/learning/videos`} className="card-base group block overflow-hidden">
                <div className="relative aspect-video w-full bg-ink-deep">
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink-deep via-ink-body to-brand-purple/40 opacity-95" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bg-warm/95 text-brand-purpleDark transition-transform group-hover:scale-110">
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded-md bg-bg-warm/85 px-1.5 py-0.5 text-[10px] font-semibold text-brand-purpleDark">
                    {v.estimatedDuration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-bangla text-sm font-semibold text-ink-body line-clamp-2 group-hover:text-brand-purple transition-colors">
                    {v.title}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider body-muted">{v.topic}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Link to="/learning/articles" className="card-base flex h-full flex-col gap-3 p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purple">
                <BookOpen size={18} />
              </span>
              <p className="text-[10px] uppercase tracking-wider body-muted">Featured article</p>
              <h3 className="h3 text-ink-body line-clamp-3">{featuredArticle.title}</h3>
              <p className="mt-auto text-xs body-muted">{featuredArticle.readingTimeMin} min read</p>
            </Link>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}

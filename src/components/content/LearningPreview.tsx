import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, BookOpen, Clock } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { useResource, videoStore, articleStore } from '../../lib/store';
import { cn } from '../../lib/cn';

const topicColor: Record<string, string> = {
  IVF: 'bg-brand-purple/10 text-brand-purpleDark',
  Diagnosis: 'bg-accent-sage/15 text-accent-sage',
  'Male Factor': 'bg-brand-purpleSoft text-brand-purple',
  Lifestyle: 'bg-brand-purpleLight/20 text-brand-purpleDark',
  'Emotional Health': 'bg-brand-purpleSoft text-brand-purple',
  Surgery: 'bg-ink-deep/10 text-ink-deep',
};

export function LearningPreview() {
  const { t, lang } = useLanguage();
  const videos = useResource(videoStore);
  const articles = useResource(articleStore);
  const featuredVideos = videos.slice(0, 3);
  const featuredArticles = articles.slice(0, 3);

  return (
    <Section tone="aurora" spacing="xl">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.learning.eyebrow}</p>
              <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>{t.learning.title}</h2>
            </div>
            <Link to="/learning" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.learning.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Videos row */}
        <div className="mb-10">
          <Reveal>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purpleDark">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </span>
                <h3 className="h3 text-ink-body">Watch — short answers, in Bangla</h3>
              </div>
              <Link to="/learning/videos" className="text-xs font-semibold text-brand-purple underline-sweep">
                All videos
              </Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.06}>
            {featuredVideos.map((v) => (
              <StaggerItem key={v.idx}>
                <Link to={`/learning/videos`} className="glass-card group block overflow-hidden h-full">
                  <div className="relative aspect-video w-full bg-purple-gradient">
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-purple shadow-lg transition-transform group-hover:scale-110">
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                      </span>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded-md bg-bg-warm/90 backdrop-blur-sm px-1.5 py-0.5 text-[10px] font-semibold text-brand-purpleDark">
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
          </Stagger>
        </div>

        {/* Articles row — blog presence */}
        <div>
          <Reveal>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-purpleLight/30 text-brand-purpleDark">
                  <BookOpen size={14} />
                </span>
                <h3 className="h3 text-ink-body">Read — in-depth guides</h3>
              </div>
              <Link to="/learning/articles" className="text-xs font-semibold text-brand-purple underline-sweep">
                All articles
              </Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3" staggerChildren={0.06}>
            {featuredArticles.map((a) => (
              <StaggerItem key={a.slug}>
                <Link to={`/learning/articles/${a.slug}`} className="glass-card group flex h-full flex-col gap-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider', topicColor[a.topic] ?? 'bg-bg-cream text-ink-body')}>
                      {a.topic}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] body-muted">
                      <Clock size={11} />
                      {a.readingTimeMin} min
                    </span>
                  </div>
                  <h4 className={cn('font-serif text-ink-body leading-snug', lang === 'bn' && 'font-bangla')} style={{ fontSize: '1.125rem', fontVariationSettings: "'opsz' 60, 'SOFT' 40" }}>
                    {lang === 'bn' ? a.titleBn : a.title}
                  </h4>
                  <p className={cn('body-muted text-sm leading-relaxed line-clamp-3 flex-1', lang === 'bn' && 'font-bangla')}>
                    {a.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple mt-auto">
                    Read article
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}

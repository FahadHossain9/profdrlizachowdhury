import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight, BookOpen, ChevronLeft } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { useResource, articleStore } from '../lib/store';
import { useLanguage } from '../hooks/useLanguage';
import { FinalCTA } from '../components/content/FinalCTA';
import { cn } from '../lib/cn';

const topicColor: Record<string, string> = {
  IVF: 'bg-brand-purpleSoft text-brand-purple',
  Diagnosis: 'bg-accent-sage/15 text-accent-sage',
  'Male Factor': 'bg-accent-blush/25 text-accent-terracotta',
  Lifestyle: 'bg-accent-gold/15 text-accent-gold',
  'Emotional Health': 'bg-brand-purpleSoft text-brand-purpleDark',
  Surgery: 'bg-ink-deep/10 text-ink-deep',
};

const fmtDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
};

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const articles = useResource(articleStore);
  const article = articles.find((a) => a.slug === slug);
  const { lang } = useLanguage();

  if (!article) return <Navigate to="/learning" replace />;

  const related = articles
    .filter((a) => a.slug !== article.slug && a.topic === article.topic)
    .slice(0, 3);
  const fallbackRelated = related.length === 0
    ? articles.filter((a) => a.slug !== article.slug).slice(0, 3)
    : related;

  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow={article.topic}
        title={lang === 'bn' ? article.titleBn : article.title}
        crumbs={[
          { label: 'Learning', to: '/learning' },
          { label: 'Articles', to: '/learning/articles' },
          { label: article.title },
        ]}
        rightSlot={
          <div className="flex items-center gap-3 text-white/85 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} />
              {article.readingTimeMin} min read
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} />
              {fmtDate(article.publishedAt)}
            </span>
          </div>
        }
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="mx-auto max-w-prose">
            <Reveal>
              <Link
                to="/learning/articles"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline mb-6"
              >
                <ChevronLeft size={14} />
                Back to all articles
              </Link>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider', topicColor[article.topic] ?? 'bg-bg-cream text-ink-body')}>
                  {article.topic}
                </span>
                <span className="text-[11px] text-ink-muted">
                  By Dr. Liza Chowdhury
                </span>
              </div>
            </Reveal>

            {lang === 'bn' && article.titleBn && (
              <Reveal>
                <p className="font-bangla text-2xl text-ink-body mb-4 leading-snug">{article.titleBn}</p>
              </Reveal>
            )}

            <Reveal>
              <p className={cn('text-lg text-ink-body leading-relaxed border-l-2 border-brand-purple pl-5 mb-8', lang === 'bn' && 'font-bangla body-bn')}>
                {article.excerpt}
              </p>
            </Reveal>

            <Reveal>
              <div className="prose-article space-y-5">
                <p className={cn('body-large text-ink-body whitespace-pre-line', lang === 'bn' && 'font-bangla body-bn')}>
                  {article.openingParagraph}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 rounded-xl border border-line bg-bg-cream p-6">
                <p className="eyebrow mb-2">DEMO ARTICLE</p>
                <p className="body text-ink-body">
                  The full body of this article will be added through the admin. For now, the excerpt and opening paragraph above represent the structure each published article will follow.
                </p>
                <Link
                  to="/learning"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple hover:underline"
                >
                  Browse all learning content
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 pt-6 border-t border-line flex items-center justify-between gap-4 text-xs text-ink-muted">
                <span>Published {fmtDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} />
                  {article.readingTimeMin} min read
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related articles */}
      {fallbackRelated.length > 0 && (
        <Section tone="aurora" spacing="lg">
          <Container>
            <Reveal>
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-2">CONTINUE READING</p>
                  <h2 className="display-serif-l text-ink-body">More from this practice</h2>
                </div>
                <Link to="/learning/articles" className="text-sm font-semibold text-brand-purple underline-sweep">
                  All articles →
                </Link>
              </div>
            </Reveal>
            <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3" staggerChildren={0.06}>
              {fallbackRelated.map((a) => (
                <StaggerItem key={a.slug}>
                  <Link to={`/learning/articles/${a.slug}`} className="glass-card group flex h-full flex-col gap-3 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider', topicColor[a.topic] ?? 'bg-bg-cream text-ink-body')}>
                        {a.topic}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
                        <Clock size={11} />
                        {a.readingTimeMin} min
                      </span>
                    </div>
                    <h3 className="font-serif text-ink-body leading-snug text-lg" style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 40" }}>
                      {a.title}
                    </h3>
                    <p className="text-sm text-ink-muted line-clamp-3 flex-1">{a.excerpt}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple mt-auto">
                      Read article
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      )}

      <FinalCTA />
    </>
  );
}

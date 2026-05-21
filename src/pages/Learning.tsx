import { Link } from 'react-router-dom';
import { Play, BookOpen, Search } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { videos } from '../data/videos';
import { articles } from '../data/articles';
import { glossary } from '../data/glossary';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Learning() {
  return (
    <>
      <SectionHero
        eyebrow="LEARNING CENTRE"
        title="Knowledge is the first step toward parenthood."
        body="Twenty videos. Ten written articles. A fifty-term bilingual glossary. Education built on Dr. Liza's clinical experience, written and recorded for patients in Bangladesh."
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="h1">Video library</h2>
              <Link to="/learning/videos" className="text-sm font-semibold text-brand-purple underline-sweep">View all 20 →</Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" staggerChildren={0.04}>
            {videos.slice(0, 8).map((v) => (
              <StaggerItem key={v.idx}>
                <article className="card-base group block overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink-deep via-ink-body to-brand-purple/45" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg-warm/90 text-brand-purpleDark transition-transform group-hover:scale-110">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </span>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded-md bg-bg-warm/90 px-1.5 py-0.5 text-[10px] font-semibold text-brand-purpleDark">
                      {v.estimatedDuration}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-bangla text-sm font-semibold text-ink-body line-clamp-2">{v.title}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider body-muted">{v.topic}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="h1">Articles</h2>
              <Link to="/learning/articles" className="text-sm font-semibold text-brand-purple underline-sweep">View all →</Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.05}>
            {articles.slice(0, 6).map((a) => (
              <StaggerItem key={a.slug}>
                <article className="card-base flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purple">
                    <BookOpen size={16} />
                  </span>
                  <p className="text-[10px] uppercase tracking-wider body-muted">{a.topic} · {a.readingTimeMin} min</p>
                  <h3 className="h3 text-ink-body">{a.title}</h3>
                  <p className="text-sm body-muted line-clamp-3">{a.excerpt}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="warm" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow mb-2">GLOSSARY</p>
                <h2 className="h1">Fertility terms, in plain Bangla and English.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg-card px-3 py-2 text-sm body-muted">
                <Search size={14} />
                <span>50 terms — production build adds search</span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {glossary.slice(0, 8).map((g) => (
              <div key={g.en} className="rounded-lg border border-line bg-bg-card p-4">
                <p className="text-sm font-semibold text-ink-body">{g.en} <span className="ml-2 font-bangla font-normal text-brand-purpleDark">{g.bn}</span></p>
                <p className="mt-1 text-sm body-muted">{g.definition}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

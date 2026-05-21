import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { journeyStages } from '../../data/journey';
import { cn } from '../../lib/cn';

export function JourneyPreview() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="warm" spacing="xl">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.journey.eyebrow}</p>
              <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>{t.journey.title}</h2>
            </div>
            <Link to="/journey" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.journey.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="-mx-5 px-5 md:mx-0 md:px-0">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 md:overflow-visible md:gap-5">
            {journeyStages.map((stage) => (
              <StaggerItem
                key={stage.index}
                className="snap-start shrink-0 w-[80%] sm:w-[55%] md:w-auto"
              >
                <article className="card-base h-full p-6 flex flex-col gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-deep text-bg-warm text-sm font-semibold">
                    0{stage.index}
                  </span>
                  <h3 className="h3 text-ink-body">{stage.title}</h3>
                  <p className="text-sm body-muted">{stage.subtitle}</p>
                  <p className="text-xs uppercase tracking-wider text-accent-gold mt-auto pt-2">{stage.duration}</p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </Section>
  );
}

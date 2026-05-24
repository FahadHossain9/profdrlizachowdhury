import { Link } from 'react-router-dom';
import { ArrowUpRight, FlaskConical, Syringe, Heart, User2, Scan, CircleDot } from 'lucide-react';
import type { Treatment } from '../../data/treatments';
import { useResource, treatmentStore } from '../../lib/store';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/cn';

const iconMap = {
  flask: FlaskConical,
  syringe: Syringe,
  heart: Heart,
  male: User2,
  scope: Scan,
  uterus: CircleDot,
  baby: Heart,
} as const;

const bentoSpan: Record<Treatment['bentoSize'], string> = {
  tall: 'md:row-span-2 md:min-h-[340px]',
  wide: 'md:col-span-2 md:min-h-[170px]',
  short: 'md:min-h-[170px]',
};

export function TreatmentBento() {
  const { t, lang } = useLanguage();
  const treatments = useResource(treatmentStore);
  return (
    <Section tone="aurora" spacing="xl" id="treatments-preview">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className={cn('eyebrow', lang === 'bn' && 'font-bangla')}>{t.whatITreat.eyebrow}</p>
              <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>{t.whatITreat.title}</h2>
              <p className={cn('body-muted body-large', lang === 'bn' && 'font-bangla body-bn')}>{t.whatITreat.body}</p>
            </div>
            <Link to="/treatments" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.whatITreat.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[170px] md:grid-flow-dense"
          staggerChildren={0.05}
        >
          {treatments.map((tr) => {
            const Icon = iconMap[tr.icon] ?? FlaskConical;
            const topRate = tr.successRate[0];
            const isTall = tr.bentoSize === 'tall';
            const isWide = tr.bentoSize === 'wide';
            return (
              <StaggerItem key={tr.slug} className={cn('h-full', bentoSpan[tr.bentoSize])}>
                <Link
                  to={`/treatments/${tr.slug}`}
                  className={cn(
                    'glass-card group relative flex h-full overflow-hidden p-6',
                    isWide ? 'flex-row items-center gap-6' : 'flex-col gap-4',
                    tr.isPriority && 'ring-1 ring-accent-gold/30',
                  )}
                >
                  {isWide ? (
                    <>
                      <span className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purpleSoft text-brand-purpleDark">
                        <Icon size={24} strokeWidth={1.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className={cn('h3 mb-1.5 text-ink-body', lang === 'bn' && 'font-bangla')}>
                          {lang === 'bn' ? tr.nameBn : tr.name}
                        </h3>
                        <p className={cn('body-muted text-sm leading-relaxed', lang === 'bn' && 'font-bangla')}>
                          {lang === 'bn' ? tr.oneLinerBn : tr.oneLiner}
                        </p>
                      </div>
                      <ArrowUpRight size={20} className="shrink-0 text-brand-purple opacity-40 transition-all duration-200 ease-out-quint group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between">
                        <span className={cn(
                          'inline-flex items-center justify-center rounded-2xl',
                          isTall ? 'h-14 w-14 bg-brand-purpleSoft text-brand-purpleDark' : 'h-11 w-11 bg-bg-cream text-ink-body',
                        )}>
                          <Icon size={isTall ? 24 : 20} strokeWidth={1.5} />
                        </span>
                        <ArrowUpRight size={18} className="text-brand-purple opacity-0 transition-all duration-200 ease-out-quint group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <div className={cn(isTall ? 'mt-1' : 'mt-auto')}>
                        <h3 className={cn(
                          'text-ink-body mb-1.5',
                          isTall ? 'display-serif-m' : 'h3',
                          lang === 'bn' && 'font-bangla',
                        )}>
                          {lang === 'bn' ? tr.nameBn : tr.name}
                        </h3>
                        <p className={cn('body-muted text-sm leading-relaxed', lang === 'bn' && 'font-bangla')}>
                          {lang === 'bn' ? tr.oneLinerBn : tr.oneLiner}
                        </p>
                      </div>

                      {/* Tall cards: fill the empty middle with a key indications snapshot */}
                      {isTall && (
                        <div className="mt-auto space-y-2">
                          <p className="text-[10px] uppercase tracking-wider text-accent-gold font-semibold">
                            Often indicated for
                          </p>
                          <ul className="space-y-1.5">
                            {tr.indications.slice(0, 3).map((ind) => (
                              <li key={ind} className="flex items-start gap-2 text-xs text-ink-body/85 leading-snug">
                                <span className="mt-1 inline-block h-1 w-1 rounded-full bg-brand-purple/70 shrink-0" />
                                <span>{ind}</span>
                              </li>
                            ))}
                          </ul>
                          {topRate && (
                            <div className="mt-3 pt-3 border-t border-line/60 flex items-baseline gap-2">
                              <span className="font-serif text-2xl text-brand-purpleDark leading-none">{topRate.rate}</span>
                              <span className="text-[11px] body-muted">{topRate.band}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

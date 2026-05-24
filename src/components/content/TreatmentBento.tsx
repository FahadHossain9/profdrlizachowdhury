import { Link } from 'react-router-dom';
import { ArrowUpRight, FlaskConical, Syringe, Heart, User2, Scan, CircleDot, Sparkles } from 'lucide-react';
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
  tall: 'md:row-span-2 md:min-h-[360px]',
  wide: 'md:col-span-2 md:min-h-[180px]',
  short: 'md:min-h-[180px]',
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
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[180px] md:grid-flow-dense"
          staggerChildren={0.05}
        >
          {treatments.map((tr) => {
            const Icon = iconMap[tr.icon] ?? FlaskConical;
            const topRate = tr.successRate[0];
            const isTall = tr.bentoSize === 'tall';
            const isWide = tr.bentoSize === 'wide';
            const isPriority = tr.isPriority;
            return (
              <StaggerItem key={tr.slug} className={cn('h-full', bentoSpan[tr.bentoSize])}>
                <Link
                  to={`/treatments/${tr.slug}`}
                  className={cn(
                    'group relative flex h-full overflow-hidden rounded-2xl border transition-all duration-350 ease-out-quint hover:-translate-y-0.5',
                    isPriority
                      ? 'border-brand-purple/40 bg-gradient-to-br from-white via-white to-brand-purpleSoft shadow-[0_18px_40px_-18px_rgba(25,43,114,0.28)] hover:shadow-[0_24px_60px_-24px_rgba(25,43,114,0.4)]'
                      : 'border-line bg-white/85 backdrop-blur-sm shadow-card hover:shadow-cardHover',
                    isWide ? 'flex-row items-stretch' : 'flex-col',
                  )}
                >
                  {/* Left accent bar — solid for priority, subtle for offered */}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-0 top-0 bottom-0 w-1',
                      isPriority ? 'bg-purple-gradient-vertical' : 'bg-gradient-to-b from-brand-purpleSoft to-bg-cream',
                    )}
                  />

                  {/* Priority badge — top-right ribbon */}
                  {isPriority && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-brand-purple px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-sm">
                      <Sparkles size={10} />
                      Primary
                    </div>
                  )}

                  {isWide ? (
                    <div className="flex w-full items-center gap-5 p-6 pl-7">
                      <span className={cn(
                        'shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                        isPriority ? 'bg-purple-gradient text-white shadow-lg shadow-brand-purple/25' : 'bg-brand-purpleSoft text-brand-purpleDark',
                      )}>
                        <Icon size={24} strokeWidth={1.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className={cn('h3 mb-1 text-ink-body', lang === 'bn' && 'font-bangla')}>
                          {lang === 'bn' ? tr.nameBn : tr.name}
                        </h3>
                        <p className={cn('body-muted text-sm leading-relaxed line-clamp-2', lang === 'bn' && 'font-bangla')}>
                          {lang === 'bn' ? tr.oneLinerBn : tr.oneLiner}
                        </p>
                      </div>
                      {topRate && (
                        <div className="shrink-0 hidden sm:block text-right border-l border-line/60 pl-5">
                          <p className="font-serif text-2xl leading-none text-brand-purpleDark">{topRate.rate}</p>
                          <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-muted">{topRate.band}</p>
                        </div>
                      )}
                      <ArrowUpRight size={20} className="shrink-0 text-brand-purple opacity-40 transition-all duration-200 ease-out-quint group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  ) : (
                    <div className="flex flex-col h-full p-6 pl-7 gap-4">
                      <div className="flex items-start justify-between">
                        <span className={cn(
                          'inline-flex items-center justify-center rounded-2xl',
                          isTall || isPriority
                            ? 'h-14 w-14 bg-purple-gradient text-white shadow-lg shadow-brand-purple/25'
                            : 'h-11 w-11 bg-brand-purpleSoft text-brand-purpleDark',
                        )}>
                          <Icon size={isTall || isPriority ? 24 : 20} strokeWidth={1.5} />
                        </span>
                        <ArrowUpRight size={18} className="text-brand-purple opacity-30 transition-all duration-200 ease-out-quint group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

                      {/* Tall priority cards: full indications list + success rate */}
                      {isTall && (
                        <div className="mt-auto space-y-2.5">
                          <p className="text-[10px] uppercase tracking-wider text-brand-purple font-semibold flex items-center gap-1.5">
                            <Sparkles size={11} />
                            Often indicated for
                          </p>
                          <ul className="space-y-1.5">
                            {tr.indications.slice(0, 3).map((ind) => (
                              <li key={ind} className="flex items-start gap-2 text-xs text-ink-body/85 leading-snug">
                                <span className="mt-1 inline-block h-1 w-1 rounded-full bg-brand-purple shrink-0" />
                                <span>{ind}</span>
                              </li>
                            ))}
                          </ul>
                          {topRate && (
                            <div className="mt-3 pt-3 border-t border-brand-purple/15 flex items-baseline justify-between gap-2">
                              <div>
                                <p className="font-serif text-2xl leading-none text-brand-purpleDark">{topRate.rate}</p>
                                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-muted">{topRate.band}</p>
                              </div>
                              <span className="text-[10px] uppercase tracking-wider text-brand-purple font-semibold">
                                per cycle
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Short cards: success rate chip if available */}
                      {!isTall && !isWide && topRate && (
                        <div className="mt-2 inline-flex items-baseline gap-1.5 self-start rounded-md bg-brand-purpleSoft/70 px-2 py-1">
                          <span className="text-[11px] font-bold text-brand-purpleDark">{topRate.rate}</span>
                          <span className="text-[10px] text-ink-muted">{topRate.band}</span>
                        </div>
                      )}
                    </div>
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

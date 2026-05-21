import { Link } from 'react-router-dom';
import { ArrowUpRight, FlaskConical, Syringe, Heart, User2, Scan, CircleDot } from 'lucide-react';
import { treatments, type Treatment } from '../../data/treatments';
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
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  short: '',
};

export function TreatmentBento() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="warm" spacing="xl" id="treatments-preview">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className={cn('eyebrow', lang === 'bn' && 'font-bangla')}>{t.whatITreat.eyebrow}</p>
              <h2 className={cn('display-l', lang === 'bn' && 'font-bangla')}>{t.whatITreat.title}</h2>
              <p className={cn('body-muted body-large', lang === 'bn' && 'font-bangla body-bn')}>{t.whatITreat.body}</p>
            </div>
            <Link to="/treatments" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.whatITreat.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(160px,_auto)] md:grid-flow-dense"
          staggerChildren={0.05}
        >
          {treatments.map((tr) => {
            const Icon = iconMap[tr.icon] ?? FlaskConical;
            return (
              <StaggerItem key={tr.slug} className={cn('h-full', bentoSpan[tr.bentoSize])}>
                <Link
                  to={`/treatments/${tr.slug}`}
                  className={cn(
                    'card-base group relative flex h-full flex-col justify-between gap-4 overflow-hidden p-6',
                    tr.isPriority && 'border-t-2 border-t-accent-gold',
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bg-cream text-ink-body">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight size={18} className="text-brand-purple opacity-0 transition-all duration-200 ease-out-quint group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className={cn('h3 mb-1 text-ink-body', lang === 'bn' && 'font-bangla')}>{lang === 'bn' ? tr.nameBn : tr.name}</h3>
                    <p className={cn('body-muted text-sm leading-relaxed', lang === 'bn' && 'font-bangla')}>{lang === 'bn' ? tr.oneLinerBn : tr.oneLiner}</p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

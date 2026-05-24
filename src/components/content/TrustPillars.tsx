import { Award, Globe, FlaskConical } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { Portrait } from './Portrait';
import { cn } from '../../lib/cn';

const icons = [Award, Globe, FlaskConical];
const accentColors = ['text-brand-purple', 'text-brand-purpleDark', 'text-accent-sage'];

export function TrustPillars() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="aurora" spacing="xl">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          {/* Left — portrait + soft quote */}
          <Reveal>
            <div className="relative">
              <div className="glass-panel p-3">
                <Portrait
                  src="/images/portraits/drliza-about.webp"
                  alt="Dr. Liza Chowdhury — Infertility & Reproductive Medicine"
                  aspect="4-5"
                  className="!rounded-2xl"
                />
              </div>
              {/* signature credential chip */}
              <div className="absolute -bottom-6 right-4 md:right-8 glass-card px-4 py-3 max-w-[240px]">
                <p className="text-[10px] uppercase tracking-wider text-brand-purple font-semibold">
                  Major Gen. Prof.
                </p>
                <p className={cn('text-sm font-semibold text-ink-body leading-snug mt-0.5', lang === 'bn' && 'font-bangla')}>
                  Dr. Liza Chowdhury (Retd.)
                </p>
                <p className="text-[11px] body-muted mt-0.5">FCPS · ESHRE · BCPS</p>
              </div>
            </div>
          </Reveal>

          {/* Right — pillars stack */}
          <div className="space-y-6">
            <Reveal>
              <div className="space-y-3 max-w-xl">
                <p className={cn('eyebrow', lang === 'bn' && 'font-bangla')}>{t.trustPillars.eyebrow}</p>
                <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>
                  Why couples trust this practice with their fertility journey.
                </h2>
              </div>
            </Reveal>

            <Stagger className="space-y-4" staggerChildren={0.08}>
              {t.trustPillars.pillars.map((p, i) => {
                const Icon = icons[i] ?? Award;
                return (
                  <StaggerItem key={p.title}>
                    <div className="glass-card p-6 flex items-start gap-5">
                      <span className={cn(
                        'shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purpleSoft',
                        accentColors[i],
                      )}>
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className={cn('h3 text-ink-body mb-1.5', lang === 'bn' && 'font-bangla')}>{p.title}</h3>
                        <p className={cn('body body-muted text-[15px]', lang === 'bn' && 'font-bangla body-bn')}>{p.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}

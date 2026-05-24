import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { PlaceholderCard } from './PlaceholderCard';
import { cn } from '../../lib/cn';

export function LabTeaser() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="dark" spacing="xl" className="relative overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 glass-dark px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-sage animate-pulse" />
                <p className={cn('text-[11px] uppercase tracking-[0.22em] font-semibold text-bg-warm/80', lang === 'bn' && 'font-bangla')}>{t.lab.eyebrow}</p>
              </div>
              <h2 className={cn('display-serif-xl', lang === 'bn' && 'font-bangla')}>{t.lab.title}</h2>
              <p className={cn('body-large text-bg-warm/80 max-w-prose', lang === 'bn' && 'font-bangla body-bn')}>{t.lab.body}</p>
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
                <div className="glass-dark p-3">
                  <p className="font-serif text-2xl text-bg-warm">6</p>
                  <p className="text-[10px] uppercase tracking-wider text-bg-warm/60 mt-1">Sealed chambers</p>
                </div>
                <div className="glass-dark p-3">
                  <p className="font-serif text-2xl text-bg-warm">ISO 3</p>
                  <p className="text-[10px] uppercase tracking-wider text-bg-warm/60 mt-1">ART workstation</p>
                </div>
                <div className="glass-dark p-3">
                  <p className="font-serif text-2xl text-bg-warm">2-person</p>
                  <p className="text-[10px] uppercase tracking-wider text-bg-warm/60 mt-1">Witnessing</p>
                </div>
              </div>
              <Link to="/laboratory" className="btn-pill bg-bg-warm text-brand-purpleDark hover:bg-brand-purpleSoft mt-3">
                <span className={cn(lang === 'bn' && 'font-bangla')}>{t.lab.cta}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-dark p-3">
              <PlaceholderCard
                variant="video"
                aspect="4-3"
                label="Esco MIRI digital readout — ambient loop"
                specRef="Plan §4.3 · clip 11.56.23 (2)"
                className="!bg-bg-warm/5 !border-bg-warm/20"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

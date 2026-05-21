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
    <Section tone="dark" spacing="xl">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="space-y-5">
              <p className={cn('eyebrow text-bg-warm/70', lang === 'bn' && 'font-bangla')}>{t.lab.eyebrow}</p>
              <h2 className={cn('display-l font-serif', lang === 'bn' && 'font-bangla')}>{t.lab.title}</h2>
              <p className={cn('body-large text-bg-warm/80 max-w-prose', lang === 'bn' && 'font-bangla body-bn')}>{t.lab.body}</p>
              <Link to="/laboratory" className="btn-pill bg-bg-warm text-brand-purpleDark hover:bg-brand-purpleSoft">
                <span className={cn(lang === 'bn' && 'font-bangla')}>{t.lab.cta}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderCard
              variant="video"
              aspect="4-3"
              label="Esco MIRI digital readout — ambient loop"
              specRef="Plan §4.3 · clip 11.56.23 (2)"
              className="bg-bg-warm/5 border-bg-warm/25"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

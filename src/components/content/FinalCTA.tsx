import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { whatsappLink, hotline } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

export function FinalCTA() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="aurora" spacing="xl">
      <Container>
        <Reveal>
          <div className="glass-panel relative mx-auto max-w-4xl px-6 py-14 md:px-14 md:py-16">
            <div className="flex flex-col items-center gap-9 text-center">
              <div className="ornament-rule max-w-xs mx-auto">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
              </div>
              <h2 className={cn('display-serif-xl text-ink-body max-w-3xl', lang === 'bn' && 'font-bangla')}>
                {t.finalCta.title}
              </h2>
              <p className={cn('body-large body-muted max-w-xl', lang === 'bn' && 'font-bangla body-bn')}>
                A confidential consultation is the first step. No commitment — just a private conversation to understand where you are.
              </p>
              <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
                <Link to="/contact" className="btn-pill bg-brand-purple text-bg-warm hover:bg-brand-purpleDark text-base shadow-card hover:shadow-soft">
                  <Calendar size={18} />
                  <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.bookLabel}</span>
                </Link>
                <a href={whatsappLink('unknown')} target="_blank" rel="noreferrer" className="btn-pill glass-pill text-ink-body text-base">
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.whatsappLabel}</span>
                </a>
                <a href={`tel:${hotline.replace(/\s|-/g, '')}`} className="btn-pill glass-pill text-ink-body text-base">
                  <Phone size={18} />
                  <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.callLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

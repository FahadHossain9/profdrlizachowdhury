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
    <Section tone="cream" spacing="xl">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className={cn('font-serif text-3xl md:text-5xl text-ink-body leading-tight', lang === 'bn' && 'font-bangla')}>
              {t.finalCta.title}
            </h2>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <a href={`tel:${hotline.replace(/\s|-/g, '')}`} className="btn-pill bg-bg-card text-ink-body shadow-card hover:bg-brand-purpleSoft">
                <Phone size={16} />
                <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.callLabel}</span>
              </a>
              <a href={whatsappLink('unknown')} target="_blank" rel="noreferrer" className="btn-pill bg-bg-card text-ink-body shadow-card hover:bg-brand-purpleSoft">
                <MessageCircle size={16} className="text-[#25D366]" />
                <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.whatsappLabel}</span>
              </a>
              <Link to="/contact" className="btn-pill bg-brand-purple text-bg-warm hover:bg-brand-purpleDark">
                <Calendar size={16} />
                <span className={cn(lang === 'bn' && 'font-bangla')}>{t.finalCta.bookLabel}</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

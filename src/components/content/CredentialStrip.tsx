import { Building2, MapPin, GraduationCap, Award, Globe2 } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { useLanguage } from '../../hooks/useLanguage';
import { Stagger, StaggerItem, Reveal } from '../motion/Reveal';
import { cn } from '../../lib/cn';

// Map credential abbreviations to the right icon: hospitals/colleges get a
// building/location, societies get an award/globe.
const credentialIcon: Record<string, typeof Building2> = {
  AFMC: GraduationCap,           // Armed Forces Medical College
  CMH: Building2,                // Combined Military Hospital
  'Ibn Sina': MapPin,            // Hospital chain
  ESHRE: Globe2,                 // European society
  BCPS: Award,                   // College / membership
  OGSB: Award,                   // Society
};

export function CredentialStrip() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="aurora" spacing="md">
      <Container>
        <div className="gradient-border-moving">
          <div className="rounded-[1.05rem] bg-bg-card px-6 md:px-10 py-8 md:py-10">
            <Reveal>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span aria-hidden className="h-px w-8 bg-brand-purple/40" />
                <p
                  className={cn(
                    'text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-purple',
                    lang === 'bn' && 'font-bangla',
                  )}
                >
                  Credentials &amp; Training
                </p>
                <span aria-hidden className="h-px w-8 bg-brand-purple/40" />
              </div>
            </Reveal>
            <Reveal>
              <p
                className={cn(
                  'text-center text-ink-body text-base md:text-lg max-w-2xl mx-auto',
                  lang === 'bn' && 'font-bangla',
                )}
              >
                {t.credibility.caption}
              </p>
            </Reveal>
            <Stagger
              className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
              staggerChildren={0.04}
            >
              {t.credibility.items.map((item) => {
                const Icon = credentialIcon[item.label] ?? Building2;
                return (
                  <StaggerItem key={item.label}>
                    <div
                      className="glass-pill inline-flex items-center gap-1.5 px-3.5 py-2 cursor-default group"
                      title={item.full}
                    >
                      <Icon size={13} strokeWidth={1.8} className="text-brand-purple group-hover:text-brand-purpleDark transition-colors" />
                      <span
                        className={cn(
                          'text-xs md:text-sm font-semibold tracking-wide text-ink-body group-hover:text-brand-purple transition-colors',
                          lang === 'bn' && 'font-bangla',
                        )}
                      >
                        {item.label}
                      </span>
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

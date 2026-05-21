import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { useLanguage } from '../../hooks/useLanguage';
import { Stagger, StaggerItem } from '../motion/Reveal';
import { cn } from '../../lib/cn';

export function CredentialStrip() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="cream" spacing="md">
      <Container>
        <Stagger className="flex flex-col items-center gap-8" staggerChildren={0.05}>
          <StaggerItem>
            <p className={cn('text-center body-muted text-sm md:text-base', lang === 'bn' && 'font-bangla')}>
              {t.credibility.caption}
            </p>
          </StaggerItem>
          <StaggerItem className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
              {t.credibility.items.map((item) => (
                <div
                  key={item.label}
                  className="group flex flex-col items-center text-center"
                  title={item.full}
                >
                  <span className={cn('text-sm md:text-base font-semibold tracking-wide text-ink-body transition-colors group-hover:text-brand-purple', lang === 'bn' && 'font-bangla')}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}

import { Award, Globe, FlaskConical } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/cn';

const icons = [Award, Globe, FlaskConical];

export function TrustPillars() {
  const { t, lang } = useLanguage();
  return (
    <Section tone="cream" spacing="xl">
      <Container>
        <Reveal>
          <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.trustPillars.eyebrow}</p>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10" staggerChildren={0.08}>
          {t.trustPillars.pillars.map((p, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <StaggerItem key={p.title}>
                <div className="flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-card text-ink-body shadow-card">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className={cn('h2 text-ink-body', lang === 'bn' && 'font-bangla')}>{p.title}</h3>
                  <p className={cn('body body-muted', lang === 'bn' && 'font-bangla body-bn')}>{p.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

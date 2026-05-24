import type { ReactNode } from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { Breadcrumb, type Crumb } from '../layout/Breadcrumb';
import { cn } from '../../lib/cn';

type Tone = 'warm' | 'cream' | 'gradient';

/**
 * Page section hero. `tone='gradient'` renders the finexplore-style filled
 * purple banner with white text and optional right-side action.
 */
export function SectionHero({
  eyebrow,
  title,
  body,
  tone = 'warm',
  align = 'center',
  bangla,
  crumbs,
  rightSlot,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: Tone;
  align?: 'center' | 'left';
  bangla?: boolean;
  crumbs?: Crumb[];
  rightSlot?: ReactNode;
}) {
  if (tone === 'gradient') {
    return (
      <section className="relative bg-purple-gradient overflow-hidden">
        {/* faint decorative orb for subtle depth */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl"
        />
        <Container className="relative py-7 md:py-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 max-w-2xl">
              {crumbs && crumbs.length > 0 && (
                <div className="mb-3">
                  <Breadcrumb items={crumbs} variant="filled" showHome />
                </div>
              )}
              <h1
                className={cn('font-serif text-white', bangla && 'font-bangla')}
                style={{
                  fontSize: 'clamp(1.5rem, 1.2vw + 1rem, 2rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.012em',
                  fontVariationSettings: "'opsz' 72, 'SOFT' 40",
                }}
              >
                {title}
              </h1>
              {body && (
                <p className={cn('mt-1.5 text-white/80 text-sm leading-snug', bangla && 'font-bangla body-bn')}>
                  {body}
                </p>
              )}
            </div>
            {rightSlot && <div className="shrink-0">{rightSlot}</div>}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <Section tone={tone} spacing="lg">
      <Container>
        {crumbs && crumbs.length > 0 && (
          <div className={cn('mb-5', align === 'center' && 'flex justify-center')}>
            <Breadcrumb items={crumbs} />
          </div>
        )}
        <Reveal>
          <div className={cn('max-w-3xl space-y-5', align === 'center' && 'mx-auto text-center')}>
            <p className={cn('eyebrow', bangla && 'font-bangla')}>{eyebrow}</p>
            <h1 className={cn('display-serif-l text-ink-body', bangla && 'font-bangla')}>{title}</h1>
            {body && <p className={cn('body-large body-muted', bangla && 'font-bangla body-bn')}>{body}</p>}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

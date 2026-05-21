import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Tone = 'warm' | 'cream' | 'card' | 'purple-soft' | 'dark';

const toneClass: Record<Tone, string> = {
  warm: 'bg-bg-warm',
  cream: 'bg-bg-cream',
  card: 'bg-bg-card',
  'purple-soft': 'bg-bg-cream',
  dark: 'bg-ink-deep text-bg-warm',
};

export function Section({
  children,
  tone = 'warm',
  className,
  id,
  spacing = 'lg',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  spacing?: 'md' | 'lg' | 'xl';
}) {
  const spacingClass =
    spacing === 'xl' ? 'py-20 md:py-28' : spacing === 'lg' ? 'py-14 md:py-20' : 'py-10 md:py-14';
  return (
    <section id={id} className={cn(toneClass[tone], spacingClass, className)}>
      {children}
    </section>
  );
}

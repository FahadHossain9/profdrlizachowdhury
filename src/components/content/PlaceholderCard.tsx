import { Camera, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

type Props = {
  label: string;
  specRef?: string;
  aspect?: 'square' | '3-4' | '4-3' | '16-9';
  variant?: 'photo' | 'video';
  className?: string;
};

const aspectClass: Record<NonNullable<Props['aspect']>, string> = {
  square: 'aspect-square',
  '3-4': 'aspect-[3/4]',
  '4-3': 'aspect-[4/3]',
  '16-9': 'aspect-video',
};

export function PlaceholderCard({ label, specRef, aspect = '3-4', variant = 'photo', className }: Props) {
  const Icon = variant === 'video' ? ImageIcon : Camera;
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl border border-dashed border-brand-purple/40 bg-brand-purpleSoft/60',
        aspectClass[aspect],
        className,
      )}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div className="absolute inset-0 grid place-items-center p-6 text-center">
        <div className="space-y-3">
          <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/15 text-brand-purple">
            <Icon size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-purpleDark">
              Production {variant} pending
            </p>
            <p className="mt-1 text-sm text-ink-body max-w-[28ch] mx-auto">{label}</p>
            {specRef && <p className="mt-1 text-[11px] body-muted">Ref: {specRef}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

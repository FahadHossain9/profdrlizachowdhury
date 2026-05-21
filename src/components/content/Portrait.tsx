import { cn } from '../../lib/cn';

type Props = {
  src: string;
  srcSmall?: string;
  alt: string;
  aspect?: '3-4' | '4-3' | '1-1' | '4-5';
  priority?: boolean;
  className?: string;
};

const aspectClass: Record<NonNullable<Props['aspect']>, string> = {
  '3-4': 'aspect-[3/4]',
  '4-3': 'aspect-[4/3]',
  '1-1': 'aspect-square',
  '4-5': 'aspect-[4/5]',
};

export function Portrait({ src, srcSmall, alt, aspect = '3-4', priority = false, className }: Props) {
  return (
    <div className={cn('relative w-full overflow-hidden rounded-xl bg-bg-cream', aspectClass[aspect], className)}>
      <img
        src={src}
        srcSet={srcSmall ? `${srcSmall} 800w, ${src} 1600w` : undefined}
        sizes="(min-width: 1024px) 640px, 92vw"
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

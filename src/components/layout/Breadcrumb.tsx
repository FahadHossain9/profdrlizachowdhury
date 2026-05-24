import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../lib/cn';

export type Crumb = {
  label: string;
  to?: string;
};

/**
 * Filled-pill breadcrumb. Purple gradient surface, white text. Last item is the current page
 * (not a link, aria-current="page"). Optional leading home icon.
 */
export function Breadcrumb({
  items,
  className,
  showHome = true,
  variant = 'filled',
}: {
  items: Crumb[];
  className?: string;
  showHome?: boolean;
  variant?: 'filled' | 'subtle';
}) {
  const full: Crumb[] = showHome ? [{ label: 'Home', to: '/' }, ...items] : items;
  const isFilled = variant === 'filled';

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'inline-flex items-center text-xs',
        isFilled
          ? 'bg-purple-gradient-dark rounded-full pl-3.5 pr-4 py-1.5 text-white shadow-card'
          : 'text-ink-muted',
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((item, i) => {
          const isLast = i === full.length - 1;
          const isHome = showHome && i === 0;
          const linkClass = isFilled
            ? 'inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors'
            : 'inline-flex items-center gap-1 text-ink-muted hover:text-brand-purple transition-colors';
          const currentClass = isFilled
            ? 'inline-flex items-center gap-1 text-white font-semibold'
            : 'inline-flex items-center gap-1 text-ink-body font-medium';
          const dividerClass = isFilled ? 'text-white/45' : 'text-ink-muted/60';

          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link to={item.to} className={linkClass}>
                  {isHome && <Home size={11} strokeWidth={2} />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className={currentClass} aria-current={isLast ? 'page' : undefined}>
                  {isHome && <Home size={11} strokeWidth={2} />}
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={11} strokeWidth={2.2} className={dividerClass} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

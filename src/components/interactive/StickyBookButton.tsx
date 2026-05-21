import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { cn } from '../../lib/cn';

export function StickyBookButton() {
  const { t, lang } = useLanguage();
  const { direction, scrolledPast } = useScrollDirection();
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  const visible = scrolledPast && direction === 'up';

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed inset-x-4 bottom-4 z-40 flex justify-center md:hidden transition-all duration-350 ease-out-quint',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none',
      )}
    >
      <Link to="/contact" className="btn-primary w-full max-w-sm justify-center shadow-lg">
        <Calendar size={18} />
        <span className={cn(lang === 'bn' && 'font-bangla')}>{t.nav.book}</span>
      </Link>
    </div>
  );
}

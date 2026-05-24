import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { LanguageToggle } from '../interactive/LanguageToggle';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { cn } from '../../lib/cn';

const navItems = [
  { to: '/about', key: 'about' as const },
  { to: '/treatments', key: 'treatments' as const },
  { to: '/laboratory', key: 'laboratory' as const },
  { to: '/chambers', key: 'chambers' as const },
  { to: '/learning', key: 'learning' as const },
  { to: '/stories', key: 'stories' as const },
];

export function SiteHeader() {
  const { t, lang } = useLanguage();
  const { scrolledPast } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b transition-shadow duration-200',
          scrolledPast ? 'border-line shadow-sm' : 'border-transparent',
        )}
      >
        <Container className="flex items-center justify-between py-4 md:py-5">
          <Link to="/" className="group flex flex-col leading-[1.15]">
            <span className={cn('font-display text-base md:text-lg font-semibold tracking-tight text-brand-purple', lang === 'bn' && 'font-bangla')}>
              {t.meta.siteName}
            </span>
            <span className={cn('mt-0.5 text-[11px] md:text-xs body-muted', lang === 'bn' && 'font-bangla')}>
              {t.meta.siteRole}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'underline-sweep text-sm font-medium transition-colors',
                    isActive ? 'text-brand-purple' : 'text-ink-body hover:text-brand-purple',
                  )
                }
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm">
              {t.nav.book}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden rounded-md p-2 text-ink-body hover:bg-brand-purpleSoft"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-warm">
          <Container className="flex items-center justify-between py-4 md:py-5">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex flex-col leading-tight">
              <span className={cn('font-display text-base font-semibold text-ink-body', lang === 'bn' && 'font-bangla')}>
                {t.meta.siteName}
              </span>
              <span className={cn('text-[11px] body-muted', lang === 'bn' && 'font-bangla')}>{t.meta.siteRole}</span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-md p-2 text-ink-body hover:bg-brand-purpleSoft"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </Container>
          <Container className="flex flex-col gap-5 pt-6">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary justify-center w-full text-base"
            >
              {t.nav.book}
            </Link>
            <nav aria-label="Mobile" className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                      isActive ? 'bg-brand-purpleSoft text-brand-purple' : 'text-ink-body hover:bg-brand-purpleSoft',
                    )
                  }
                >
                  {t.nav[item.key]}
                </NavLink>
              ))}
            </nav>
            <div className="pt-6 border-t border-line">
              <LanguageToggle />
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

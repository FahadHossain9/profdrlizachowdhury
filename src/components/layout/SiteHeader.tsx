import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User2, FlaskConical, Stethoscope, MapPin, BookOpen, Quote, Phone, MessageCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { LanguageToggle } from '../interactive/LanguageToggle';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { whatsappLink, hotline } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

const navItems = [
  { to: '/about', key: 'about' as const, icon: User2 },
  { to: '/treatments', key: 'treatments' as const, icon: FlaskConical },
  { to: '/laboratory', key: 'laboratory' as const, icon: Stethoscope },
  { to: '/chambers', key: 'chambers' as const, icon: MapPin },
  { to: '/learning', key: 'learning' as const, icon: BookOpen },
  { to: '/stories', key: 'stories' as const, icon: Quote },
];

export function SiteHeader() {
  const { t, lang } = useLanguage();
  const { scrolledPast } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

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
              className="lg:hidden inline-flex items-center justify-center rounded-full bg-brand-purpleSoft/60 p-2.5 text-brand-purpleDark hover:bg-brand-purpleSoft transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={20} strokeWidth={2} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-brand-purpleDeep/35 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed right-0 top-0 z-[65] flex h-full w-[min(360px,92vw)] flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-line">
                <Link to="/" onClick={close} className="flex flex-col leading-tight min-w-0">
                  <span className={cn('font-display text-sm font-semibold text-brand-purple truncate', lang === 'bn' && 'font-bangla')}>
                    {t.meta.siteName}
                  </span>
                  <span className={cn('text-[10px] body-muted truncate', lang === 'bn' && 'font-bangla')}>
                    {t.meta.siteRole}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 inline-flex items-center justify-center rounded-full bg-bg-cream p-2 text-ink-body hover:bg-brand-purpleSoft hover:text-brand-purple transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto">
                {/* Quick contact actions */}
                <div className="px-5 pt-5">
                  <p className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold mb-2.5">
                    Quick contact
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${hotline.replace(/\s|-/g, '')}`}
                      className="group flex items-center gap-2 rounded-xl border border-line bg-white p-3 hover:border-brand-purple/40 hover:shadow-sm transition-all"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-purpleSoft text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Phone size={14} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold">Call</p>
                        <p className="text-xs font-semibold text-ink-body truncate">{hotline}</p>
                      </div>
                    </a>
                    <a
                      href={whatsappLink('ufcl')}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 rounded-xl border border-line bg-white p-3 hover:border-[#25D366]/40 hover:shadow-sm transition-all"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1FAB54]">
                        <MessageCircle size={14} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold">WhatsApp</p>
                        <p className="text-xs font-semibold text-ink-body truncate">Reply ~4h</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Nav links */}
                <nav aria-label="Mobile primary" className="px-3 py-5">
                  <p className="px-2 text-[10px] uppercase tracking-wider text-ink-muted font-semibold mb-2">
                    Browse
                  </p>
                  <ul className="space-y-0.5">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            onClick={close}
                            className={({ isActive }) =>
                              cn(
                                'group flex items-center justify-between gap-3 rounded-lg px-3 py-3 transition-all',
                                isActive
                                  ? 'bg-brand-purpleSoft text-brand-purple'
                                  : 'text-ink-body hover:bg-brand-purpleSoft/60 hover:text-brand-purple',
                              )
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span className="flex items-center gap-3">
                                  <span className={cn(
                                    'inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                                    isActive
                                      ? 'bg-white text-brand-purple shadow-sm'
                                      : 'bg-bg-cream text-ink-muted group-hover:bg-white group-hover:text-brand-purple',
                                  )}>
                                    <Icon size={15} strokeWidth={1.8} />
                                  </span>
                                  <span className={cn('text-sm font-semibold', lang === 'bn' && 'font-bangla')}>
                                    {t.nav[item.key]}
                                  </span>
                                </span>
                                <ArrowUpRight
                                  size={14}
                                  className={cn(
                                    'opacity-0 transition-opacity',
                                    isActive ? 'opacity-100' : 'group-hover:opacity-60',
                                  )}
                                />
                              </>
                            )}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Language */}
                <div className="px-5 pb-5">
                  <p className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold mb-2.5">
                    Language
                  </p>
                  <LanguageToggle />
                </div>
              </div>

              {/* Sticky footer CTA */}
              <div className="border-t border-line bg-bg-warm/60 backdrop-blur-sm px-5 py-4">
                <Link
                  to="/contact"
                  onClick={close}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Calendar size={16} />
                  <span className={cn(lang === 'bn' && 'font-bangla')}>{t.nav.book}</span>
                </Link>
                <p className={cn('mt-2 text-center text-[10px] body-muted', lang === 'bn' && 'font-bangla')}>
                  Confidential · Female-led team
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

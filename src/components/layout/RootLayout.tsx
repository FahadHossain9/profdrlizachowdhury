import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { SmoothScroll } from '../motion/SmoothScroll';
import { ChatPanel } from '../interactive/ChatPanel';
import { StickyBookButton } from '../interactive/StickyBookButton';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/cn';

export function RootLayout() {
  const { t, lang } = useLanguage();
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col">
        <div className="bg-ink-deep text-bg-warm/85 text-[11px] md:text-xs">
          <div className="container-page py-2 flex items-center justify-center gap-2 text-center">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-gold animate-pinpulse" />
            <p className={cn('max-w-2xl', lang === 'bn' && 'font-bangla body-bn')}>
              {t.meta.demoBanner}
            </p>
          </div>
        </div>
        <SiteHeader />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <ChatPanel />
        <StickyBookButton />
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  );
}

import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { AuroraBackdrop } from './AuroraBackdrop';
import { ChatPanel } from '../interactive/ChatPanel';
import { StickyBookButton } from '../interactive/StickyBookButton';

export function RootLayout() {
  return (
    <>
      <AuroraBackdrop />
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <ChatPanel />
        <StickyBookButton />
        <ScrollRestoration />
      </div>
    </>
  );
}

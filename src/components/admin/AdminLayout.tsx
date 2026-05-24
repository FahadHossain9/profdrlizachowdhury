import { useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Video, Quote, FlaskConical, MapPin, ExternalLink, Menu, X, Stethoscope, CalendarCheck } from 'lucide-react';
import { Breadcrumb, type Crumb } from '../layout/Breadcrumb';
import { cn } from '../../lib/cn';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/appointments', label: 'Appointments', icon: CalendarCheck },
  { to: '/admin/articles', label: 'Articles', icon: FileText },
  { to: '/admin/videos', label: 'Videos', icon: Video },
  { to: '/admin/stories', label: 'Stories', icon: Quote },
  { to: '/admin/treatments', label: 'Treatments', icon: FlaskConical },
  { to: '/admin/chambers', label: 'Chambers', icon: MapPin },
];

function useAdminCrumbs(): Crumb[] {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean); // ['admin', 'articles']
  if (segments.length <= 1) return [{ label: 'Dashboard' }];
  const sub = segments[1];
  const subLabel = navItems.find((n) => n.to === `/admin/${sub}`)?.label ?? sub;
  return [{ label: 'Admin', to: '/admin' }, { label: subLabel }];
}

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const crumbs = useAdminCrumbs();

  return (
    <div className="flex min-h-screen bg-bg-warm">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-line/60 bg-white">
        <SidebarBody />
      </aside>

      {/* Sidebar — mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-brand-purpleDeep/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative flex h-full w-72 flex-col bg-white">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-3 rounded-md p-1.5 text-ink-muted hover:bg-bg-cream"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <SidebarBody onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-line/60 bg-white px-5 lg:px-8 py-3.5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-ink-body hover:bg-bg-cream lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
            <Breadcrumb items={crumbs} showHome={false} variant="subtle" className="text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream transition-colors"
            >
              View site
              <ExternalLink size={12} />
            </Link>
            <div className="h-8 w-8 rounded-full bg-purple-gradient text-white grid place-items-center text-xs font-semibold">
              DL
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="px-5 py-5 border-b border-line/60">
        <Link to="/admin" onClick={onNavigate} className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-gradient text-white">
            <Stethoscope size={18} strokeWidth={1.7} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink-body">Dr. Liza Admin</span>
            <span className="text-[11px] text-ink-muted">Content workspace</span>
          </div>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-brand-purpleSoft text-brand-purpleDark shadow-sm'
                    : 'text-ink-body hover:bg-bg-cream',
                )
              }
            >
              <Icon size={17} strokeWidth={1.7} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="px-5 py-4 border-t border-line/60 text-[11px] text-ink-muted">
        <p>Demo backend — changes persist in browser localStorage.</p>
      </div>
    </>
  );
}

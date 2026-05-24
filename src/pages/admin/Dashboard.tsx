import { Link } from 'react-router-dom';
import { FileText, Video, Quote, FlaskConical, MapPin, ArrowUpRight, RotateCcw, CalendarCheck, Inbox } from 'lucide-react';
import {
  useResource,
  articleStore,
  videoStore,
  storyStore,
  treatmentStore,
  chamberStore,
  appointmentStore,
} from '../../lib/store';

export default function AdminDashboard() {
  const articles = useResource(articleStore);
  const videos = useResource(videoStore);
  const stories = useResource(storyStore);
  const treatments = useResource(treatmentStore);
  const chambers = useResource(chamberStore);
  const appointments = useResource(appointmentStore);

  const newAppointments = appointments.filter((a) => a.status === 'new').length;

  const stats = [
    { label: 'Appointments', count: appointments.length, icon: CalendarCheck, to: '/admin/appointments', tint: 'from-accent-sage/20 to-accent-sage/5 text-accent-sage', badge: newAppointments > 0 ? `${newAppointments} new` : undefined },
    { label: 'Articles', count: articles.length, icon: FileText, to: '/admin/articles', tint: 'from-brand-purple/15 to-brand-purpleSoft text-brand-purpleDark', badge: undefined },
    { label: 'Videos', count: videos.length, icon: Video, to: '/admin/videos', tint: 'from-accent-gold/15 to-accent-gold/5 text-accent-gold', badge: undefined },
    { label: 'Stories', count: stories.length, icon: Quote, to: '/admin/stories', tint: 'from-accent-blush/25 to-accent-blush/5 text-accent-terracotta', badge: undefined },
    { label: 'Treatments', count: treatments.length, icon: FlaskConical, to: '/admin/treatments', tint: 'from-accent-sage/15 to-accent-sage/5 text-accent-sage', badge: undefined },
    { label: 'Chambers', count: chambers.length, icon: MapPin, to: '/admin/chambers', tint: 'from-brand-purpleSoft to-bg-cream text-brand-purple', badge: undefined },
  ];

  const resetAll = () => {
    if (!confirm('Reset all content back to demo seed data? Your edits will be lost.')) return;
    articleStore.reset();
    videoStore.reset();
    storyStore.reset();
    treatmentStore.reset();
    chamberStore.reset();
    appointmentStore.reset();
  };

  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink-deep tracking-tight">Welcome back, Madam.</h1>
          <p className="mt-1 text-sm text-ink-muted">An overview of your content. Click any tile to edit.</p>
        </div>
        <button
          type="button"
          onClick={resetAll}
          className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream transition-colors"
        >
          <RotateCcw size={13} />
          Reset demo data
        </button>
      </div>

      {newAppointments > 0 && (
        <Link
          to="/admin/appointments"
          className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-brand-purple/20 bg-brand-purpleSoft/40 p-4 hover:bg-brand-purpleSoft/60 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-purple shadow-sm">
              <Inbox size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-deep">
                {newAppointments} new {newAppointments === 1 ? 'enquiry needs' : 'enquiries need'} a follow-up call
              </p>
              <p className="text-xs text-ink-muted mt-0.5">Open Appointments to review and mark as contacted.</p>
            </div>
          </div>
          <ArrowUpRight size={16} className="text-brand-purple" />
        </Link>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map(({ label, count, icon: Icon, to, tint, badge }) => (
          <Link
            key={label}
            to={to}
            className="group relative rounded-xl border border-line bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tint}`}>
                <Icon size={18} strokeWidth={1.7} />
              </span>
              <ArrowUpRight size={16} className="text-ink-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-purple transition-all" />
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-tight text-ink-deep">{count}</p>
            <div className="mt-0.5 flex items-center gap-2">
              <p className="text-sm text-ink-muted">{label}</p>
              {badge && (
                <span className="inline-flex items-center rounded-full bg-brand-purple px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                  {badge}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RecentActivity title="Recent articles" items={articles.slice(0, 5).map((a) => ({ id: a.slug, label: a.title, meta: `${a.topic} · ${a.readingTimeMin} min` }))} to="/admin/articles" />
        <RecentActivity title="Recent videos" items={videos.slice(0, 5).map((v) => ({ id: String(v.idx), label: v.title, meta: `${v.topic} · ${v.estimatedDuration}` }))} to="/admin/videos" />
      </div>
    </div>
  );
}

function RecentActivity({
  title,
  items,
  to,
}: {
  title: string;
  items: { id: string; label: string; meta: string }[];
  to: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink-deep">{title}</h2>
        <Link to={to} className="text-xs font-semibold text-brand-purple hover:underline">
          Manage →
        </Link>
      </div>
      <ul className="space-y-2.5">
        {items.length === 0 && <li className="text-xs text-ink-muted">Nothing yet.</li>}
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
            <span className="text-ink-body line-clamp-1">{item.label}</span>
            <span className="shrink-0 text-[11px] text-ink-muted">{item.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

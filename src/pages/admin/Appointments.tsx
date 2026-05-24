import { useMemo, useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import {
  AdminPageHeader,
  AdminTable,
  AdminFormSheet,
  Field,
  TextInput,
  Textarea,
  Select,
  type AdminColumn,
  type AdminFilter,
} from '../../components/admin/AdminPrimitives';
import { useResource, appointmentStore, chamberStore } from '../../lib/store';
import type { Appointment, AppointmentStatus } from '../../data/appointments';
import { whatsappLink } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

const statusOrder: AppointmentStatus[] = ['new', 'contacted', 'scheduled', 'completed', 'cancelled'];

const statusStyles: Record<AppointmentStatus, string> = {
  new: 'bg-brand-purpleSoft text-brand-purpleDark',
  contacted: 'bg-accent-gold/15 text-accent-gold',
  scheduled: 'bg-accent-sage/20 text-accent-sage',
  completed: 'bg-brand-purpleDeep/10 text-brand-purpleDeep',
  cancelled: 'bg-red-50 text-red-600',
};

const statusLabel: Record<AppointmentStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  scheduled: 'Scheduled',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

const fmtDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
};

export default function AdminAppointments() {
  const appointments = useResource(appointmentStore);
  const chambers = useResource(chamberStore);
  const [editing, setEditing] = useState<Appointment | null>(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [chamberFilter, setChamberFilter] = useState<string>('all');

  const chamberName = (slug: string) =>
    chambers.find((c) => c.slug === slug)?.shortName ?? slug;

  const sorted = useMemo(() => {
    return [...appointments].sort((a, b) => {
      // Status priority first (new > contacted > ...), then newest submission first
      const sa = statusOrder.indexOf(a.status);
      const sb = statusOrder.indexOf(b.status);
      if (sa !== sb) return sa - sb;
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });
  }, [appointments]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((a) => {
      if (statusFilter !== 'all' && a.status !== statusFilter) return false;
      if (chamberFilter !== 'all' && a.chamberSlug !== chamberFilter) return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.phone.toLowerCase().includes(q) ||
        (a.email ?? '').toLowerCase().includes(q) ||
        (a.message ?? '').toLowerCase().includes(q) ||
        (a.treatmentInterest ?? '').toLowerCase().includes(q)
      );
    });
  }, [sorted, query, statusFilter, chamberFilter]);

  const counts = useMemo(() => {
    const c = { all: appointments.length, new: 0, contacted: 0, scheduled: 0, completed: 0, cancelled: 0 };
    appointments.forEach((a) => { c[a.status]++; });
    return c;
  }, [appointments]);

  const filters: AdminFilter[] = [
    {
      key: 'status',
      label: 'Status',
      value: statusFilter,
      onChange: setStatusFilter,
      options: [
        { value: 'all', label: `All (${counts.all})` },
        ...statusOrder.map((s) => ({ value: s, label: `${statusLabel[s]} (${counts[s]})` })),
      ],
    },
    {
      key: 'chamber',
      label: 'Chamber',
      value: chamberFilter,
      onChange: setChamberFilter,
      options: [
        { value: 'all', label: 'All chambers' },
        ...chambers.map((c) => ({ value: c.slug, label: c.shortName })),
      ],
    },
  ];

  const columns: AdminColumn<Appointment>[] = [
    {
      key: 'name',
      header: 'Patient',
      cell: (a) => (
        <div>
          <p className="font-medium text-ink-body">{a.name}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1">{a.phone}{a.email ? ` · ${a.email}` : ''}</p>
        </div>
      ),
    },
    {
      key: 'interest',
      header: 'Interest',
      width: '180px',
      cell: (a) => (
        <span className="text-xs text-ink-body">
          {a.treatmentInterest ?? <span className="text-ink-muted italic">Not specified</span>}
        </span>
      ),
    },
    {
      key: 'chamber',
      header: 'Chamber',
      width: '130px',
      cell: (a) => <span className="text-xs text-ink-body">{chamberName(a.chamberSlug)}</span>,
    },
    {
      key: 'submitted',
      header: 'Submitted',
      width: '170px',
      cell: (a) => <span className="text-xs text-ink-muted tabular-nums">{fmtDate(a.submittedAt)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      width: '120px',
      cell: (a) => (
        <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider', statusStyles[a.status])}>
          {statusLabel[a.status]}
        </span>
      ),
    },
  ];

  const save = () => {
    if (!editing) return;
    appointmentStore.upsert(editing);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Appointments"
        subtitle="Enquiries submitted from the public contact form. Sorted by status (new first), then by most recent."
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search name, phone, message"
        filters={filters}
        resultCount={filtered.length}
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={(a) => setEditing({ ...a })}
        onEdit={(a) => setEditing({ ...a })}
        onDelete={(a) => appointmentStore.remove(a.id)}
        getRowKey={(a) => a.id}
        emptyMessage="No appointments match your filters."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.name || ''}
        subtitle={editing ? `Submitted ${fmtDate(editing.submittedAt)}` : undefined}
        onSubmit={save}
        submitLabel="Save changes"
      >
        {editing && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Patient name">
                <TextInput value={editing.name} onChange={(v) => setEditing({ ...editing, name: v })} />
              </Field>
              <Field label="Phone">
                <TextInput type="tel" value={editing.phone} onChange={(v) => setEditing({ ...editing, phone: v })} />
              </Field>
            </div>

            <Field label="Email">
              <TextInput type="email" value={editing.email ?? ''} onChange={(v) => setEditing({ ...editing, email: v || undefined })} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Preferred chamber">
                <Select
                  value={editing.chamberSlug}
                  onChange={(v) => setEditing({ ...editing, chamberSlug: v })}
                  options={chambers.map((c) => ({ value: c.slug, label: c.shortName }))}
                />
              </Field>
              <Field label="Interested in">
                <TextInput
                  value={editing.treatmentInterest ?? ''}
                  onChange={(v) => setEditing({ ...editing, treatmentInterest: v || undefined })}
                  placeholder="e.g. IVF"
                />
              </Field>
            </div>

            <Field label="Status">
              <Select
                value={editing.status}
                onChange={(v) => setEditing({ ...editing, status: v as AppointmentStatus })}
                options={statusOrder.map((s) => ({ value: s, label: statusLabel[s] }))}
              />
            </Field>

            <Field label="Patient's message">
              <Textarea
                value={editing.message ?? ''}
                onChange={(v) => setEditing({ ...editing, message: v || undefined })}
                rows={3}
              />
            </Field>

            <Field label="Internal notes" hint="Visible to admin only. Track coordinator follow-up here.">
              <Textarea
                value={editing.notes ?? ''}
                onChange={(v) => setEditing({ ...editing, notes: v || undefined })}
                rows={3}
                placeholder="e.g. Called Tuesday 4pm, prefers Thursday slot."
              />
            </Field>

            {/* Quick contact actions */}
            <div className="rounded-lg border border-line bg-bg-cream/40 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-2">Quick contact</p>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${editing.phone.replace(/\s|-/g, '')}`} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream">
                  <Phone size={12} className="text-brand-purple" />
                  Call
                </a>
                <a href={whatsappLink('unknown')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream">
                  <MessageCircle size={12} className="text-[#25D366]" />
                  WhatsApp
                </a>
                {editing.email && (
                  <a href={`mailto:${editing.email}`} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream">
                    <Mail size={12} className="text-brand-purple" />
                    Email
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { Plus, X } from 'lucide-react';
import {
  AdminPageHeader,
  AdminTable,
  AdminFormSheet,
  Field,
  TextInput,
  Textarea,
  NumberInput,
  Switch,
  StringListEditor,
  type AdminColumn,
} from '../../components/admin/AdminPrimitives';
import { useResource, chamberStore } from '../../lib/store';
import type { Chamber } from '../../data/chambers';

const emptyChamber = (): Chamber => ({
  slug: '',
  name: '',
  shortName: '',
  role: '',
  address: '',
  area: '',
  city: 'Dhaka',
  schedule: [{ day: 'Sunday', time: '11:00 AM – 1:00 PM' }],
  hotline: '',
  whatToBringFirst: [],
  whatToBringFollowUp: [],
  parkingNotes: '',
  geo: { lat: 23.81, lng: 90.41 },
  titleHeldHere: '',
  isPrimary: false,
  mapPosition: { x: 50, y: 50 },
});

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export default function AdminChambers() {
  const chambers = useResource(chamberStore);
  const [editing, setEditing] = useState<Chamber | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chambers;
    return chambers.filter(
      (c) => c.name.toLowerCase().includes(q) || c.area.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q),
    );
  }, [chambers, query]);

  const columns: AdminColumn<Chamber>[] = [
    {
      key: 'name',
      header: 'Chamber',
      cell: (c) => (
        <div>
          <p className="font-medium text-ink-body">
            {c.shortName}
            {c.isPrimary && <span className="ml-2 inline-flex items-center rounded-full bg-brand-purpleSoft px-1.5 py-0.5 text-[10px] font-semibold text-brand-purpleDark uppercase tracking-wider">Primary</span>}
          </p>
          <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1">{c.name}</p>
        </div>
      ),
    },
    { key: 'area', header: 'Area', width: '160px', cell: (c) => <span className="text-xs text-ink-body">{c.area}</span> },
    { key: 'schedule', header: 'Schedule', cell: (c) => <span className="text-xs text-ink-muted">{c.schedule.map((s) => s.day.slice(0, 3)).join(' · ')}</span> },
    { key: 'hotline', header: 'Hotline', width: '140px', cell: (c) => <span className="text-xs text-ink-muted font-mono">{c.hotline}</span> },
  ];

  const startNew = () => {
    setEditing(emptyChamber());
    setIsNew(true);
  };

  const startEdit = (c: Chamber) => {
    setEditing({
      ...c,
      schedule: c.schedule.map((s) => ({ ...s })),
      whatToBringFirst: [...c.whatToBringFirst],
      whatToBringFollowUp: [...c.whatToBringFollowUp],
      geo: { ...c.geo },
      mapPosition: { ...c.mapPosition },
    });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    let next = editing;
    if (!next.slug) next = { ...next, slug: slugify(next.shortName || next.name) || `chamber-${Date.now()}` };
    if (!next.name.trim()) {
      alert('Name is required.');
      return;
    }
    chamberStore.upsert(next);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Chambers"
        subtitle="Practice locations across Dhaka with schedules and contact details."
        actionLabel="New chamber"
        onAction={startNew}
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search chambers"
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={startEdit}
        onEdit={startEdit}
        onDelete={(c) => chamberStore.remove(c.slug)}
        getRowKey={(c) => c.slug}
        emptyMessage="No chambers match your search."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.shortName || editing?.name || (isNew ? 'New chamber' : '')}
        subtitle={editing?.area}
        onSubmit={save}
        isNew={isNew}
      >
        {editing && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name" required>
                <TextInput value={editing.name} onChange={(v) => setEditing({ ...editing, name: v })} placeholder="Uttara Fertility Centre Limited" />
              </Field>
              <Field label="Short name">
                <TextInput value={editing.shortName} onChange={(v) => setEditing({ ...editing, shortName: v })} placeholder="UFCL" />
              </Field>
            </div>

            <Field label="Role / description">
              <TextInput value={editing.role} onChange={(v) => setEditing({ ...editing, role: v })} placeholder="Primary practice — IVF cycles and embryology lab" />
            </Field>

            <Field label="Title held at this chamber">
              <TextInput value={editing.titleHeldHere} onChange={(v) => setEditing({ ...editing, titleHeldHere: v })} placeholder="Chairman & Chief Consultant" />
            </Field>

            <div>
              <Switch
                checked={editing.isPrimary}
                onChange={(v) => setEditing({ ...editing, isPrimary: v })}
                label="Mark as primary practice"
              />
            </div>

            <Field label="Address">
              <Textarea value={editing.address} onChange={(v) => setEditing({ ...editing, address: v })} rows={2} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Area">
                <TextInput value={editing.area} onChange={(v) => setEditing({ ...editing, area: v })} placeholder="Uttara, Sector 14" />
              </Field>
              <Field label="City">
                <TextInput value={editing.city} onChange={(v) => setEditing({ ...editing, city: v })} placeholder="Dhaka" />
              </Field>
            </div>

            <Field label="Slug" hint="Auto-generated if blank">
              <TextInput value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: v })} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Hotline">
                <TextInput type="tel" value={editing.hotline} onChange={(v) => setEditing({ ...editing, hotline: v })} placeholder="01743-243386" />
              </Field>
              <Field label="Alternate hotline">
                <TextInput type="tel" value={editing.alternateHotline ?? ''} onChange={(v) => setEditing({ ...editing, alternateHotline: v || undefined })} />
              </Field>
            </div>

            <Field label="Schedule" hint="One row per day the doctor sits at this chamber.">
              <div className="space-y-2">
                {editing.schedule.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={s.day}
                      placeholder="Sunday"
                      onChange={(e) => setEditing({ ...editing, schedule: editing.schedule.map((ss, ii) => (ii === i ? { ...ss, day: e.target.value } : ss)) })}
                      className="block w-32 rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
                    />
                    <input
                      type="text"
                      value={s.time}
                      placeholder="11:00 AM – 1:00 PM"
                      onChange={(e) => setEditing({ ...editing, schedule: editing.schedule.map((ss, ii) => (ii === i ? { ...ss, time: e.target.value } : ss)) })}
                      className="block flex-1 rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
                    />
                    <button
                      type="button"
                      onClick={() => setEditing({ ...editing, schedule: editing.schedule.filter((_, ii) => ii !== i) })}
                      className="rounded-md p-2 text-ink-muted hover:bg-red-50 hover:text-red-600"
                      aria-label="Remove"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setEditing({ ...editing, schedule: [...editing.schedule, { day: '', time: '' }] })}
                  className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream transition-colors"
                >
                  <Plus size={13} /> Add day
                </button>
              </div>
            </Field>

            <Field label="What to bring — first visit">
              <StringListEditor
                values={editing.whatToBringFirst}
                onChange={(next) => setEditing({ ...editing, whatToBringFirst: next })}
              />
            </Field>
            <Field label="What to bring — follow-up visit">
              <StringListEditor
                values={editing.whatToBringFollowUp}
                onChange={(next) => setEditing({ ...editing, whatToBringFollowUp: next })}
              />
            </Field>

            <Field label="Parking notes">
              <Textarea value={editing.parkingNotes} onChange={(v) => setEditing({ ...editing, parkingNotes: v })} rows={2} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Latitude">
                <NumberInput value={editing.geo.lat} onChange={(v) => setEditing({ ...editing, geo: { ...editing.geo, lat: v } })} />
              </Field>
              <Field label="Longitude">
                <NumberInput value={editing.geo.lng} onChange={(v) => setEditing({ ...editing, geo: { ...editing.geo, lng: v } })} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Map X (%)" hint="Position on stylised Dhaka SVG: 0–100">
                <NumberInput value={editing.mapPosition.x} onChange={(v) => setEditing({ ...editing, mapPosition: { ...editing.mapPosition, x: v } })} min={0} max={100} />
              </Field>
              <Field label="Map Y (%)">
                <NumberInput value={editing.mapPosition.y} onChange={(v) => setEditing({ ...editing, mapPosition: { ...editing.mapPosition, y: v } })} min={0} max={100} />
              </Field>
            </div>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}

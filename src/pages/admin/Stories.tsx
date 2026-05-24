import { useMemo, useState } from 'react';
import {
  AdminPageHeader,
  AdminTable,
  AdminFormSheet,
  Field,
  TextInput,
  Textarea,
  Select,
  NumberInput,
  type AdminColumn,
  type AdminFilter,
} from '../../components/admin/AdminPrimitives';
import { useResource, storyStore } from '../../lib/store';
import type { Story } from '../../data/stories';

const treatments: Story['treatment'][] = ['IVF', 'ICSI', 'IUI', 'Laparoscopy + IVF', 'Recurrent Loss Care'];
const outcomes: Story['outcome'][] = ['pregnancy', 'pregnancy-after-multiple-cycles', 'continuing-care'];

const emptyStory = (): Story => ({
  slug: '',
  headline: '',
  initials: '',
  treatment: 'IVF',
  year: new Date().getFullYear(),
  outcome: 'pregnancy',
  pullQuote: '',
  narrative: '',
  closingFromDoctor: '',
  isPlaceholder: true,
});

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export default function AdminStories() {
  const stories = useResource(storyStore);
  const [editing, setEditing] = useState<Story | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState('');
  const [treatmentFilter, setTreatmentFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      if (treatmentFilter !== 'all' && s.treatment !== treatmentFilter) return false;
      if (!q) return true;
      return (
        s.headline.toLowerCase().includes(q) ||
        s.treatment.toLowerCase().includes(q) ||
        s.initials.toLowerCase().includes(q)
      );
    });
  }, [stories, query, treatmentFilter]);

  const filters: AdminFilter[] = [
    {
      key: 'treatment',
      label: 'Treatment',
      value: treatmentFilter,
      onChange: setTreatmentFilter,
      options: [
        { value: 'all', label: 'All treatments' },
        ...treatments.map((t) => ({ value: t, label: t })),
      ],
    },
  ];

  const columns: AdminColumn<Story>[] = [
    {
      key: 'headline',
      header: 'Headline',
      cell: (s) => (
        <div>
          <p className="font-medium text-ink-body line-clamp-1">{s.headline}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1 italic">"{s.pullQuote.slice(0, 80)}…"</p>
        </div>
      ),
    },
    { key: 'initials', header: 'Patient', width: '110px', cell: (s) => <span className="text-xs text-ink-body">{s.initials}</span> },
    { key: 'treatment', header: 'Treatment', width: '150px', cell: (s) => <span className="text-xs text-brand-purple font-semibold">{s.treatment}</span> },
    { key: 'year', header: 'Year', width: '70px', cell: (s) => <span className="text-xs text-ink-muted">{s.year}</span> },
  ];

  const startNew = () => {
    setEditing(emptyStory());
    setIsNew(true);
  };

  const startEdit = (s: Story) => {
    setEditing({ ...s });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    let next = editing;
    if (!next.slug) next = { ...next, slug: slugify(next.headline) || `story-${Date.now()}` };
    if (!next.headline.trim()) {
      alert('Headline is required.');
      return;
    }
    storyStore.upsert(next);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Patient Stories"
        subtitle="Anonymised, consented patient narratives. Marked as demo placeholders until cleared."
        actionLabel="New story"
        onAction={startNew}
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search by headline or initials"
        filters={filters}
        resultCount={filtered.length}
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={startEdit}
        onEdit={startEdit}
        onDelete={(s) => storyStore.remove(s.slug)}
        getRowKey={(s) => s.slug}
        emptyMessage="No stories match your filters."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.headline || (isNew ? 'New story' : '')}
        subtitle={editing?.initials}
        onSubmit={save}
        isNew={isNew}
      >
        {editing && (
          <>
            <Field label="Headline" required hint="One-line summary. Shown as the story page title.">
              <TextInput value={editing.headline} onChange={(v) => setEditing({ ...editing, headline: v })} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Patient initials">
                <TextInput value={editing.initials} onChange={(v) => setEditing({ ...editing, initials: v })} placeholder="S.R. & M.R." />
              </Field>
              <Field label="Treatment">
                <Select
                  value={editing.treatment}
                  onChange={(v) => setEditing({ ...editing, treatment: v as Story['treatment'] })}
                  options={treatments.map((t) => ({ value: t, label: t }))}
                />
              </Field>
              <Field label="Year">
                <NumberInput value={editing.year} onChange={(v) => setEditing({ ...editing, year: v })} min={2000} max={2100} />
              </Field>
            </div>

            <Field label="Outcome">
              <Select
                value={editing.outcome}
                onChange={(v) => setEditing({ ...editing, outcome: v as Story['outcome'] })}
                options={outcomes.map((o) => ({ value: o, label: o.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) }))}
              />
            </Field>

            <Field label="Slug" hint="Leave blank to auto-generate.">
              <TextInput value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: v })} placeholder="auto-generated" />
            </Field>

            <Field label="Pull quote" hint="The pulled quote shown on cards. Use the patient's voice.">
              <Textarea value={editing.pullQuote} onChange={(v) => setEditing({ ...editing, pullQuote: v })} rows={3} />
            </Field>

            <Field label="Narrative" hint="The full story. Use blank lines for paragraph breaks.">
              <Textarea value={editing.narrative} onChange={(v) => setEditing({ ...editing, narrative: v })} rows={10} />
            </Field>

            <Field label="Clinical reflection from doctor">
              <Textarea value={editing.closingFromDoctor} onChange={(v) => setEditing({ ...editing, closingFromDoctor: v })} rows={3} />
            </Field>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}

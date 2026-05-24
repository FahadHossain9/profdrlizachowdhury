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
  Switch,
  StringListEditor,
  type AdminColumn,
} from '../../components/admin/AdminPrimitives';
import { useResource, treatmentStore } from '../../lib/store';
import type { Treatment } from '../../data/treatments';

const icons: Treatment['icon'][] = ['flask', 'syringe', 'baby', 'male', 'heart', 'scope', 'uterus'];
const bentoSizes: Treatment['bentoSize'][] = ['short', 'wide', 'tall'];

const emptyTreatment = (): Treatment => ({
  slug: '',
  name: '',
  nameBn: '',
  icon: 'flask',
  oneLiner: '',
  oneLinerBn: '',
  indications: [],
  process: [],
  differentiator: '',
  cost: { rangeBdt: [0, 0], included: [], excluded: [], note: '' },
  successRate: [],
  faqs: [],
  bentoSize: 'short',
  isPriority: false,
});

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export default function AdminTreatments() {
  const treatments = useResource(treatmentStore);
  const [editing, setEditing] = useState<Treatment | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return treatments;
    return treatments.filter(
      (t) => t.name.toLowerCase().includes(q) || t.oneLiner.toLowerCase().includes(q) || t.slug.toLowerCase().includes(q),
    );
  }, [treatments, query]);

  const columns: AdminColumn<Treatment>[] = [
    {
      key: 'name',
      header: 'Treatment',
      cell: (t) => (
        <div>
          <p className="font-medium text-ink-body">
            {t.name}
            {t.isPriority && <span className="ml-2 inline-flex items-center rounded-full bg-brand-purpleSoft px-1.5 py-0.5 text-[10px] font-semibold text-brand-purpleDark uppercase tracking-wider">Primary</span>}
          </p>
          <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1">{t.oneLiner}</p>
        </div>
      ),
    },
    { key: 'slug', header: 'Slug', width: '180px', cell: (t) => <code className="text-[11px] text-ink-muted">{t.slug}</code> },
    { key: 'size', header: 'Bento', width: '90px', cell: (t) => <span className="text-xs capitalize text-ink-body">{t.bentoSize}</span> },
    {
      key: 'cost',
      header: 'Cost (৳)',
      width: '160px',
      cell: (t) => (
        <span className="text-xs text-ink-muted">
          {t.cost.rangeBdt[0].toLocaleString()}–{t.cost.rangeBdt[1].toLocaleString()}
        </span>
      ),
    },
  ];

  const startNew = () => {
    setEditing(emptyTreatment());
    setIsNew(true);
  };

  const startEdit = (t: Treatment) => {
    setEditing({ ...t, cost: { ...t.cost, rangeBdt: [...t.cost.rangeBdt] as [number, number], included: [...t.cost.included], excluded: [...t.cost.excluded] } });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    let next = editing;
    if (!next.slug) next = { ...next, slug: slugify(next.name) || `treatment-${Date.now()}` };
    if (!next.name.trim()) {
      alert('Name is required.');
      return;
    }
    treatmentStore.upsert(next);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Treatments"
        subtitle="Top-level treatment fields. Nested process steps and FAQs are edited from the data file for now."
        actionLabel="New treatment"
        onAction={startNew}
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search treatments"
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={startEdit}
        onEdit={startEdit}
        onDelete={(t) => treatmentStore.remove(t.slug)}
        getRowKey={(t) => t.slug}
        emptyMessage="No treatments match your search."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.name || (isNew ? 'New treatment' : '')}
        subtitle={editing?.slug ? `/${editing.slug}` : undefined}
        onSubmit={save}
        isNew={isNew}
      >
        {editing && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name (English)" required>
                <TextInput value={editing.name} onChange={(v) => setEditing({ ...editing, name: v })} placeholder="IVF" />
              </Field>
              <Field label="Name (Bangla)">
                <TextInput value={editing.nameBn} onChange={(v) => setEditing({ ...editing, nameBn: v })} placeholder="আইভিএফ" />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Icon">
                <Select
                  value={editing.icon}
                  onChange={(v) => setEditing({ ...editing, icon: v as Treatment['icon'] })}
                  options={icons.map((i) => ({ value: i, label: i }))}
                />
              </Field>
              <Field label="Bento size" hint="How big the homepage card is.">
                <Select
                  value={editing.bentoSize}
                  onChange={(v) => setEditing({ ...editing, bentoSize: v as Treatment['bentoSize'] })}
                  options={bentoSizes.map((b) => ({ value: b, label: b }))}
                />
              </Field>
              <Field label="Slug" hint="Auto-generated if blank">
                <TextInput value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: v })} />
              </Field>
            </div>

            <div>
              <Switch
                checked={editing.isPriority}
                onChange={(v) => setEditing({ ...editing, isPriority: v })}
                label="Mark as primary treatment (highlighted on homepage)"
              />
            </div>

            <Field label="One-liner (English)" hint="Shown on the homepage card and treatments list.">
              <Textarea value={editing.oneLiner} onChange={(v) => setEditing({ ...editing, oneLiner: v })} rows={2} />
            </Field>
            <Field label="One-liner (Bangla)">
              <Textarea value={editing.oneLinerBn} onChange={(v) => setEditing({ ...editing, oneLinerBn: v })} rows={2} />
            </Field>

            <Field label="Indications" hint="When this treatment is recommended.">
              <StringListEditor
                values={editing.indications}
                onChange={(next) => setEditing({ ...editing, indications: next })}
                placeholder="e.g. Blocked fallopian tubes"
              />
            </Field>

            <Field label="Differentiator" hint="Why patients should choose this practice for this treatment.">
              <Textarea value={editing.differentiator} onChange={(v) => setEditing({ ...editing, differentiator: v })} rows={4} />
            </Field>

            <div className="rounded-lg border border-line bg-bg-cream/30 p-4">
              <p className="text-xs font-semibold text-ink-deep mb-3">Cost</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label="Range from (৳)">
                  <NumberInput
                    value={editing.cost.rangeBdt[0]}
                    onChange={(v) => setEditing({ ...editing, cost: { ...editing.cost, rangeBdt: [v, editing.cost.rangeBdt[1]] } })}
                  />
                </Field>
                <Field label="Range to (৳)">
                  <NumberInput
                    value={editing.cost.rangeBdt[1]}
                    onChange={(v) => setEditing({ ...editing, cost: { ...editing.cost, rangeBdt: [editing.cost.rangeBdt[0], v] } })}
                  />
                </Field>
              </div>
              <Field label="What's included">
                <StringListEditor
                  values={editing.cost.included}
                  onChange={(next) => setEditing({ ...editing, cost: { ...editing.cost, included: next } })}
                />
              </Field>
              <div className="h-3" />
              <Field label="What's excluded">
                <StringListEditor
                  values={editing.cost.excluded}
                  onChange={(next) => setEditing({ ...editing, cost: { ...editing.cost, excluded: next } })}
                />
              </Field>
              <div className="h-3" />
              <Field label="Cost note">
                <Textarea
                  value={editing.cost.note}
                  onChange={(v) => setEditing({ ...editing, cost: { ...editing.cost, note: v } })}
                  rows={2}
                />
              </Field>
            </div>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}

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
import { useResource, articleStore } from '../../lib/store';
import type { Article } from '../../data/articles';

const topics: Article['topic'][] = ['IVF', 'Diagnosis', 'Male Factor', 'Lifestyle', 'Emotional Health', 'Surgery'];

const emptyArticle = (): Article => ({
  slug: '',
  title: '',
  titleBn: '',
  excerpt: '',
  topic: 'IVF',
  readingTimeMin: 5,
  publishedAt: new Date().toISOString().slice(0, 10),
  openingParagraph: '',
});

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function AdminArticles() {
  const articles = useResource(articleStore);
  const [editing, setEditing] = useState<Article | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState('');
  const [topicFilter, setTopicFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (topicFilter !== 'all' && a.topic !== topicFilter) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.titleBn.includes(q) ||
        a.topic.toLowerCase().includes(q) ||
        a.slug.toLowerCase().includes(q)
      );
    });
  }, [articles, query, topicFilter]);

  const filters: AdminFilter[] = [
    {
      key: 'topic',
      label: 'Topic',
      value: topicFilter,
      onChange: setTopicFilter,
      options: [
        { value: 'all', label: 'All topics' },
        ...topics.map((t) => ({ value: t, label: t })),
      ],
    },
  ];

  const columns: AdminColumn<Article>[] = [
    {
      key: 'title',
      header: 'Title',
      cell: (a) => (
        <div>
          <p className="font-medium text-ink-body line-clamp-1">{a.title}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted font-bangla line-clamp-1">{a.titleBn}</p>
        </div>
      ),
    },
    {
      key: 'topic',
      header: 'Topic',
      width: '140px',
      cell: (a) => (
        <span className="inline-flex items-center rounded-full bg-bg-cream px-2 py-0.5 text-[11px] font-medium text-ink-body">
          {a.topic}
        </span>
      ),
    },
    { key: 'reading', header: 'Read time', width: '110px', cell: (a) => <span className="text-xs text-ink-muted">{a.readingTimeMin} min</span> },
    { key: 'date', header: 'Published', width: '120px', cell: (a) => <span className="text-xs text-ink-muted">{a.publishedAt}</span> },
  ];

  const startNew = () => {
    setEditing(emptyArticle());
    setIsNew(true);
  };

  const startEdit = (a: Article) => {
    setEditing({ ...a });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    let next = editing;
    if (!next.slug) next = { ...next, slug: slugify(next.title) || `article-${Date.now()}` };
    if (!next.title.trim()) {
      alert('Title is required.');
      return;
    }
    articleStore.upsert(next);
    setEditing(null);
  };

  return (
    <div>
      <AdminPageHeader
        title="Articles"
        subtitle="Long-form blog posts shown on the public learning page."
        actionLabel="New article"
        onAction={startNew}
        searchValue={query}
        onSearchChange={setQuery}
        searchPlaceholder="Search by title or topic"
        filters={filters}
        resultCount={filtered.length}
      />

      <AdminTable
        rows={filtered}
        columns={columns}
        onRowClick={startEdit}
        onEdit={startEdit}
        onDelete={(a) => articleStore.remove(a.slug)}
        getRowKey={(a) => a.slug}
        emptyMessage="No articles match your filters."
      />

      <AdminFormSheet
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.title || (isNew ? 'New article' : '')}
        subtitle={editing?.slug ? `/${editing.slug}` : undefined}
        onSubmit={save}
        isNew={isNew}
      >
        {editing && (
          <>
            <Field label="Title (English)" required>
              <TextInput value={editing.title} onChange={(v) => setEditing({ ...editing, title: v })} placeholder="Article title" />
            </Field>
            <Field label="Title (Bangla)">
              <TextInput value={editing.titleBn} onChange={(v) => setEditing({ ...editing, titleBn: v })} placeholder="বাংলা শিরোনাম" />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Topic">
                <Select
                  value={editing.topic}
                  onChange={(v) => setEditing({ ...editing, topic: v as Article['topic'] })}
                  options={topics.map((t) => ({ value: t, label: t }))}
                />
              </Field>
              <Field label="Read time (min)">
                <NumberInput value={editing.readingTimeMin} onChange={(v) => setEditing({ ...editing, readingTimeMin: v })} min={1} max={60} />
              </Field>
              <Field label="Published">
                <TextInput type="date" value={editing.publishedAt} onChange={(v) => setEditing({ ...editing, publishedAt: v })} />
              </Field>
            </div>

            <Field label="Slug" hint="URL-friendly identifier. Leave blank to generate from title.">
              <TextInput value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: v })} placeholder="auto-generated" />
            </Field>

            <Field label="Excerpt" hint="Shown on the article card. 2–3 sentences.">
              <Textarea value={editing.excerpt} onChange={(v) => setEditing({ ...editing, excerpt: v })} rows={3} />
            </Field>

            <Field label="Opening paragraph" hint="First paragraph of the article body.">
              <Textarea value={editing.openingParagraph} onChange={(v) => setEditing({ ...editing, openingParagraph: v })} rows={5} />
            </Field>
          </>
        )}
      </AdminFormSheet>
    </div>
  );
}

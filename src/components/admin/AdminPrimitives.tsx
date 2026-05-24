import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Plus, Search, X, Trash2, Pencil, Eye, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '../../lib/cn';

/* ──────────────── Page header ──────────────── */

export type AdminFilter = {
  key: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
};

export function AdminPageHeader({
  title,
  subtitle,
  actionLabel,
  onAction,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  filters,
  resultCount,
}: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
  searchValue?: string;
  onSearchChange?: (v: string) => void;
  searchPlaceholder?: string;
  filters?: AdminFilter[];
  resultCount?: number;
}) {
  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink-deep tracking-tight">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {onSearchChange !== undefined && (
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                type="search"
                value={searchValue ?? ''}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={searchPlaceholder ?? 'Search…'}
                className="h-9 w-full md:w-64 rounded-md border border-line bg-white pl-9 pr-3 text-sm text-ink-body placeholder:text-ink-muted focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
              />
            </div>
          )}
          {onAction && actionLabel && (
            <button
              type="button"
              onClick={onAction}
              className="inline-flex items-center gap-1.5 rounded-md bg-brand-purple px-3.5 py-2 text-sm font-semibold text-white hover:bg-brand-purpleDark transition-colors shadow-sm"
            >
              <Plus size={15} />
              {actionLabel}
            </button>
          )}
        </div>
      </div>

      {(filters && filters.length > 0) || resultCount !== undefined ? (
        <div className="flex flex-wrap items-center gap-2">
          {filters?.map((f) => (
            <label key={f.key} className="inline-flex items-center gap-1.5 text-xs">
              <span className="text-ink-muted">{f.label}:</span>
              <select
                value={f.value}
                onChange={(e) => f.onChange(e.target.value)}
                className="h-8 rounded-md border border-line bg-white px-2 pr-7 text-xs font-medium text-ink-body focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
              >
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          ))}
          {resultCount !== undefined && (
            <span className="ml-auto text-xs text-ink-muted">
              {resultCount} {resultCount === 1 ? 'result' : 'results'}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}

/* ──────────────── Table ──────────────── */

export type AdminColumn<T> = {
  key: string;
  header: string;
  width?: string;
  cell: (row: T) => ReactNode;
};

export function AdminTable<T>({
  rows,
  columns,
  onRowClick,
  onEdit,
  onDelete,
  onView,
  emptyMessage = 'No items yet.',
  getRowKey,
  showSL = true,
  pageSize = 10,
  startIndex = 0,
}: {
  rows: T[];
  columns: AdminColumn<T>[];
  onRowClick?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  emptyMessage?: string;
  getRowKey: (row: T) => string | number;
  /** Show a leading SL serial number column. Default true. */
  showSL?: boolean;
  /** Page size for pagination. Default 10. */
  pageSize?: number;
  /** Offset for SL numbering when paginated externally. Default 0. */
  startIndex?: number;
}) {
  // Local pagination state — only used if pageSize > 0 and rows > pageSize
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageRows = useMemo(() => {
    if (pageSize <= 0) return rows;
    const start = (safePage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [rows, safePage, pageSize]);
  const pageOffset = (safePage - 1) * pageSize + startIndex;

  // Reset page when row count drops below current page
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [page, totalPages]);

  const hasActions = !!(onEdit || onDelete || onView);

  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-white py-16 text-center">
        <p className="text-sm text-ink-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-cream/40">
              {showSL && (
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-ink-muted" style={{ width: '54px' }}>
                  SL
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-ink-muted"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
              {hasActions && (
                <th
                  className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-ink-muted"
                  style={{ width: '160px' }}
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row, idx) => (
              <tr
                key={getRowKey(row)}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                className={cn(
                  'border-b border-line/60 last:border-b-0 transition-colors',
                  onRowClick && 'cursor-pointer hover:bg-bg-cream/30',
                )}
              >
                {showSL && (
                  <td className="px-4 py-3 align-middle text-[11px] font-mono text-ink-muted tabular-nums">
                    {String(pageOffset + idx + 1).padStart(2, '0')}
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 align-middle text-ink-body">
                    {col.cell(row)}
                  </td>
                ))}
                {hasActions && (
                  <td className="px-3 py-3 align-middle">
                    <div className="flex items-center justify-end gap-1.5">
                      {onView && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); onView(row); }}
                          className="inline-flex items-center gap-1 rounded-md border border-line bg-white px-2 py-1 text-[11px] font-semibold text-ink-body hover:bg-bg-cream transition-colors"
                          aria-label="View"
                        >
                          <Eye size={12} />
                          View
                        </button>
                      )}
                      {onEdit && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); onEdit(row); }}
                          className="inline-flex items-center gap-1 rounded-md border border-brand-purple/30 bg-brand-purpleSoft px-2 py-1 text-[11px] font-semibold text-brand-purpleDark hover:bg-brand-purple hover:text-white transition-colors"
                          aria-label="Edit"
                        >
                          <Pencil size={12} />
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm('Delete this item? This cannot be undone.')) onDelete(row);
                          }}
                          className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-white px-2 py-1 text-[11px] font-semibold text-red-600 hover:bg-red-50 transition-colors"
                          aria-label="Delete"
                        >
                          <Trash2 size={12} />
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination footer */}
      {pageSize > 0 && rows.length > pageSize && (
        <TablePagination
          page={safePage}
          totalPages={totalPages}
          total={rows.length}
          pageSize={pageSize}
          onPage={setPage}
        />
      )}
    </div>
  );
}

function TablePagination({
  page,
  totalPages,
  total,
  pageSize,
  onPage,
}: {
  page: number;
  totalPages: number;
  total: number;
  pageSize: number;
  onPage: (p: number) => void;
}) {
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <div className="flex flex-col gap-3 border-t border-line bg-bg-cream/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-ink-muted">
        Showing <span className="font-semibold text-ink-body">{from}–{to}</span> of {total}
      </p>
      <div className="flex items-center gap-1">
        <PageButton onClick={() => onPage(1)} disabled={page === 1} aria-label="First">
          <ChevronsLeft size={13} />
        </PageButton>
        <PageButton onClick={() => onPage(page - 1)} disabled={page === 1} aria-label="Previous">
          <ChevronLeft size={13} />
        </PageButton>
        <span className="px-3 text-xs font-semibold tabular-nums text-ink-body">
          {page} / {totalPages}
        </span>
        <PageButton onClick={() => onPage(page + 1)} disabled={page === totalPages} aria-label="Next">
          <ChevronRight size={13} />
        </PageButton>
        <PageButton onClick={() => onPage(totalPages)} disabled={page === totalPages} aria-label="Last">
          <ChevronsRight size={13} />
        </PageButton>
      </div>
    </div>
  );
}

function PageButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...rest}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line bg-white text-ink-body hover:bg-bg-cream disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
    >
      {children}
    </button>
  );
}

/* ──────────────── Pagination component for public listings ──────────────── */

export function Pagination({
  page,
  totalPages,
  onPage,
  className,
}: {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
  className?: string;
}) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const window = 1;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= window) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== -1) {
      pages.push(-1);
    }
  }

  return (
    <nav className={cn('flex items-center justify-center gap-1.5', className)} aria-label="Pagination">
      <button
        type="button"
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="inline-flex h-9 items-center gap-1 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink-body hover:bg-bg-cream disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={14} />
        <span className="hidden sm:inline">Previous</span>
      </button>
      {pages.map((p, i) =>
        p === -1 ? (
          <span key={`gap-${i}`} className="px-1 text-sm text-ink-muted">…</span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            aria-current={p === page ? 'page' : undefined}
            className={cn(
              'inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full border px-2 text-sm font-semibold transition-colors',
              p === page
                ? 'border-brand-purple bg-brand-purple text-white shadow-sm'
                : 'border-line bg-white text-ink-body hover:bg-bg-cream',
            )}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="inline-flex h-9 items-center gap-1 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink-body hover:bg-bg-cream disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}

/* ──────────────── Form sheet (slide-in drawer) ──────────────── */

export function AdminFormSheet({
  open,
  onClose,
  title,
  subtitle,
  children,
  onSubmit,
  submitLabel = 'Save changes',
  isNew,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSubmit: () => void;
  submitLabel?: string;
  isNew?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-brand-purpleDeep/40"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col animate-in slide-in-from-right">
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-ink-muted font-semibold">
              {isNew ? 'New' : 'Edit'}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-ink-deep truncate">{title}</h2>
            {subtitle && <p className="mt-1 text-xs text-ink-muted line-clamp-1">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md p-1.5 text-ink-muted hover:bg-bg-cream"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto px-6 py-5">
            <div className="space-y-5">{children}</div>
          </div>
          <div className="flex items-center justify-end gap-2 border-t border-line bg-bg-cream/30 px-6 py-3.5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-ink-body hover:bg-bg-cream transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-brand-purple px-4 py-2 text-sm font-semibold text-white hover:bg-brand-purpleDark transition-colors shadow-sm"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ──────────────── Form fields ──────────────── */

export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink-deep mb-1.5">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-ink-muted">{hint}</span>}
    </label>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'url' | 'date' | 'number';
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="block w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body placeholder:text-ink-muted focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
    />
  );
}

export function NumberInput({
  value,
  onChange,
  min,
  max,
  placeholder,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  return (
    <input
      type="number"
      value={Number.isFinite(value) ? value : ''}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
      className="block w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body placeholder:text-ink-muted focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
    />
  );
}

export function Textarea({
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body placeholder:text-ink-muted focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15 resize-y"
    />
  );
}

export function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2.5">
      <span className="relative inline-block h-5 w-9">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="block h-5 w-9 rounded-full bg-line transition-colors peer-checked:bg-brand-purple" />
        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
      </span>
      <span className="text-sm text-ink-body">{label}</span>
    </label>
  );
}

export function StringListEditor({
  values,
  onChange,
  placeholder,
}: {
  values: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      {values.map((v, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="text"
            value={v}
            placeholder={placeholder}
            onChange={(e) => onChange(values.map((vv, ii) => (ii === i ? e.target.value : vv)))}
            className="block flex-1 rounded-md border border-line bg-white px-3 py-2 text-sm text-ink-body focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/15"
          />
          <button
            type="button"
            onClick={() => onChange(values.filter((_, ii) => ii !== i))}
            className="rounded-md p-2 text-ink-muted hover:bg-red-50 hover:text-red-600"
            aria-label="Remove"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...values, ''])}
        className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-body hover:bg-bg-cream transition-colors"
      >
        <Plus size={13} /> Add item
      </button>
    </div>
  );
}

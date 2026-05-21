import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/cn';

export function LanguageToggle({ inverted = false }: { inverted?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const base = inverted
    ? 'border-bg-warm/40 text-bg-warm'
    : 'border-line text-ink-body';
  const activeBg = inverted ? 'bg-bg-warm text-brand-purpleDark' : 'bg-brand-purple text-bg-warm';

  return (
    <div
      role="group"
      aria-label="Language toggle"
      className={cn('inline-flex items-center gap-0 rounded-full border p-0.5 text-xs font-semibold', base)}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn(
          'rounded-full px-3 py-1 transition-colors duration-200 ease-out-quint',
          lang === 'en' ? activeBg : 'opacity-70 hover:opacity-100',
        )}
      >
        {t.language.en}
      </button>
      <button
        type="button"
        onClick={() => setLang('bn')}
        aria-pressed={lang === 'bn'}
        className={cn(
          'rounded-full px-3 py-1 font-bangla transition-colors duration-200 ease-out-quint',
          lang === 'bn' ? activeBg : 'opacity-70 hover:opacity-100',
        )}
      >
        {t.language.bn}
      </button>
    </div>
  );
}

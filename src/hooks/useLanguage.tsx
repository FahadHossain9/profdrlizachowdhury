import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en } from '../content/en';
import { bn } from '../content/bn';

export type Lang = 'en' | 'bn';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = 'drliza.lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'en' || stored === 'bn') return stored;
    return navigator.language?.startsWith('bn') ? 'bn' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = lang === 'bn' ? (bn as typeof en) : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

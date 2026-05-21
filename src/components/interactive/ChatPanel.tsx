import { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { whatsappLink, type ChamberSlug } from '../../lib/whatsapp';
import { easing, duration } from '../../lib/tokens';
import { cn } from '../../lib/cn';

type Option = { labelEn: string; labelBn: string; chamber: ChamberSlug };

const options: Option[] = [
  { labelEn: 'Book at UFCL (Uttara)', labelBn: 'UFCL-এ বুকিং (উত্তরা)', chamber: 'ufcl' },
  { labelEn: 'Book at a different chamber', labelBn: 'অন্য চেম্বারে বুকিং', chamber: 'unknown' },
  { labelEn: 'Just have a question', labelBn: 'কেবল একটি প্রশ্ন', chamber: 'unknown' },
];

export function ChatPanel() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-4 right-4 z-40 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple text-bg-warm shadow-lg transition-transform duration-200 ease-out-quint hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-purple"
      >
        <MessageCircle size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: duration.short, ease: easing.primary }}
            className="fixed bottom-4 right-4 z-50 w-[92vw] max-w-sm rounded-2xl bg-bg-card shadow-2xl border border-line"
            role="dialog"
            aria-label="Chat options"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-purpleSoft text-brand-purple">
                  <MessageCircle size={16} />
                </span>
                <div>
                  <p className={cn('text-sm font-semibold', lang === 'bn' && 'font-bangla')}>
                    {lang === 'bn' ? 'আপনাকে কীভাবে সাহায্য করতে পারি?' : 'How can we help?'}
                  </p>
                  <p className="text-xs body-muted">
                    {lang === 'bn' ? 'WhatsApp-এ উত্তর পাবেন' : 'Replies on WhatsApp'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-md p-1 text-ink-muted hover:bg-brand-purpleSoft"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="p-3">
              {options.map((opt) => (
                <li key={opt.labelEn}>
                  <a
                    href={whatsappLink(opt.chamber)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between gap-2 rounded-xl px-3 py-3 hover:bg-brand-purpleSoft transition-colors"
                  >
                    <span className={cn('text-sm font-medium', lang === 'bn' && 'font-bangla')}>
                      {lang === 'bn' ? opt.labelBn : opt.labelEn}
                    </span>
                    <ChevronRight size={16} className="text-brand-purple transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="px-5 pb-4 text-[11px] body-muted">
              {lang === 'bn'
                ? 'একজন মানুষ সহায়ক ৪ ঘণ্টার মধ্যে উত্তর দেবেন।'
                : 'A human coordinator replies within 4 hours.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

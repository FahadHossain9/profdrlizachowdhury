import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Container } from './Container';
import { useLanguage } from '../../hooks/useLanguage';
import { chambers } from '../../data/chambers';
import { whatsappLink, hotline } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

export function SiteFooter() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-ink-deep text-bg-warm">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
        {/* Contact */}
        <div>
          <h3 className={cn('eyebrow text-bg-warm/80', lang === 'bn' && 'font-bangla')}>
            {t.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="flex items-center gap-2 hover:underline" href={`tel:${hotline.replace(/\s|-/g, '')}`}>
                <Phone size={16} />
                {hotline}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href={whatsappLink('unknown')} target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                WhatsApp Dr. Liza's office
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href="mailto:hello@drliza.example">
                <Mail size={16} />
                hello@drliza.example
              </a>
            </li>
          </ul>
        </div>

        {/* Chambers */}
        <div>
          <h3 className={cn('eyebrow text-bg-warm/80', lang === 'bn' && 'font-bangla')}>
            {t.footer.chambersHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {chambers.map((c) => (
              <li key={c.slug}>
                <Link to={`/chambers/${c.slug}`} className="hover:underline">
                  {c.shortName}
                  {c.isPrimary && <span className="ml-1.5 text-bg-warm/70">· primary</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className={cn('eyebrow text-bg-warm/80', lang === 'bn' && 'font-bangla')}>
            {t.footer.aboutHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Dr. Liza</Link></li>
            <li><Link to="/about" className="hover:underline">Credentials & Training</Link></li>
            <li><Link to="/about" className="hover:underline">Publications & Research</Link></li>
            <li><Link to="/ethics" className="hover:underline">Practice Ethics</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy & Confidentiality</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-bg-warm/15">
        <Container className="flex flex-col gap-2 py-6 text-xs text-bg-warm/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dr. Liza Chowdhury. {t.footer.bmdc}</p>
          <p className={cn('max-w-prose', lang === 'bn' && 'font-bangla body-bn')}>
            {t.footer.disclaimer}
          </p>
        </Container>
      </div>
    </footer>
  );
}

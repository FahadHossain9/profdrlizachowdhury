import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Container } from './Container';
import { useLanguage } from '../../hooks/useLanguage';
import { useResource, chamberStore } from '../../lib/store';
import { whatsappLink, hotline } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';

const credentialChips = ['MBBS', 'DGO', 'MCPS', 'FCPS (OBGYN)', 'ESHRE', 'BCPS', 'OGSB'];

export function SiteFooter() {
  const { t, lang } = useLanguage();
  const chambers = useResource(chamberStore);
  const primaryChamber = chambers.find((c) => c.isPrimary) ?? chambers[0];

  return (
    <footer className="bg-brand-purpleDeep text-white relative overflow-hidden">
      {/* faint top-accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purpleLite/40 to-transparent" />

      <Container className="relative grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-10">
        {/* Brand block — Dr. Liza identity card */}
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/50">
            Major Gen. Prof. (Retd.)
          </p>
          <h2 className="mt-2 font-serif text-white text-3xl leading-tight" style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 35" }}>
            Dr. Liza Chowdhury
          </h2>
          <p className={cn('mt-1.5 text-sm text-white/65 leading-relaxed', lang === 'bn' && 'font-bangla')}>
            {t.meta.siteRole}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {credentialChips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/80"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/60 max-w-md leading-relaxed">
            Founder of Bangladesh's first government fertility centre. Now in private practice at the Uttara Fertility Centre.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-purple hover:bg-white/95 hover:shadow-lg transition-all"
          >
            <Calendar size={15} />
            Book a consultation
          </Link>
        </div>

        {/* Practice / Visit links */}
        <div className="lg:col-span-3">
          <h3 className={cn('text-[10px] uppercase tracking-[0.22em] font-semibold text-white/50', lang === 'bn' && 'font-bangla')}>
            The Practice
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Dr. Liza</Link></li>
            <li><Link to="/treatments" className="text-white/80 hover:text-white transition-colors">Treatments</Link></li>
            <li><Link to="/laboratory" className="text-white/80 hover:text-white transition-colors">The Laboratory</Link></li>
            <li><Link to="/journey" className="text-white/80 hover:text-white transition-colors">Your Journey</Link></li>
            <li><Link to="/stories" className="text-white/80 hover:text-white transition-colors">Patient Stories</Link></li>
            <li><Link to="/learning" className="text-white/80 hover:text-white transition-colors">Learning Centre</Link></li>
          </ul>
        </div>

        {/* Chambers */}
        <div className="lg:col-span-2">
          <h3 className={cn('text-[10px] uppercase tracking-[0.22em] font-semibold text-white/50', lang === 'bn' && 'font-bangla')}>
            {t.footer.chambersHeading}
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {chambers.map((c) => (
              <li key={c.slug}>
                <Link to={`/chambers/${c.slug}`} className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                  {c.shortName}
                  {c.isPrimary && <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/70">Primary</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact card */}
        <div className="lg:col-span-2">
          <h3 className={cn('text-[10px] uppercase tracking-[0.22em] font-semibold text-white/50', lang === 'bn' && 'font-bangla')}>
            {t.footer.contact}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="group flex items-start gap-2 text-white/80 hover:text-white transition-colors" href={`tel:${hotline.replace(/\s|-/g, '')}`}>
                <Phone size={14} className="mt-0.5 shrink-0 text-brand-purpleLight" />
                <span>{hotline}</span>
              </a>
            </li>
            <li>
              <a className="group flex items-start gap-2 text-white/80 hover:text-white transition-colors" href={whatsappLink('unknown')} target="_blank" rel="noreferrer">
                <MessageCircle size={14} className="mt-0.5 shrink-0 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a className="group flex items-start gap-2 text-white/80 hover:text-white transition-colors break-all" href="mailto:hello@drliza.example">
                <Mail size={14} className="mt-0.5 shrink-0 text-brand-purpleLight" />
                <span>hello@drliza.example</span>
              </a>
            </li>
            {primaryChamber && (
              <li className="pt-3 border-t border-white/10">
                <div className="flex items-start gap-2 text-white/65 text-xs leading-relaxed">
                  <MapPin size={12} className="mt-0.5 shrink-0 text-brand-purpleLight" />
                  <span>{primaryChamber.address}</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[11px] text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} Dr. Liza Chowdhury · All rights reserved</p>
            <p>{t.footer.bmdc}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4">
            <Link to="/ethics" className="hover:text-white transition-colors inline-flex items-center gap-1">
              Practice Ethics <ArrowUpRight size={10} />
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors inline-flex items-center gap-1">
              Privacy <ArrowUpRight size={10} />
            </Link>
          </div>
        </Container>
        <Container>
          <p className={cn('pb-6 text-[10px] leading-relaxed text-white/40', lang === 'bn' && 'font-bangla body-bn')}>
            {t.footer.disclaimer}
          </p>
        </Container>
      </div>
    </footer>
  );
}

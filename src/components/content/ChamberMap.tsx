import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { useLanguage } from '../../hooks/useLanguage';
import { useResource, chamberStore } from '../../lib/store';
import { cn } from '../../lib/cn';

export function ChamberMap() {
  const { t, lang } = useLanguage();
  const chambers = useResource(chamberStore);

  return (
    <Section tone="aurora" spacing="xl">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={cn('eyebrow mb-3', lang === 'bn' && 'font-bangla')}>{t.chambers.eyebrow}</p>
              <h2 className={cn('display-serif-l', lang === 'bn' && 'font-bangla')}>{t.chambers.title}</h2>
            </div>
            <Link to="/chambers" className={cn('inline-flex items-center gap-1 text-brand-purple font-semibold underline-sweep', lang === 'bn' && 'font-bangla')}>
              {t.chambers.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Stylised map */}
          <Reveal className="md:col-span-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden glass-card p-0">
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8E9CCF" strokeOpacity="0.18" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                {/* Stylised river */}
                <path d="M -10 220 C 80 200, 160 250, 230 215 S 360 200, 420 230" stroke="#8E9CCF" strokeOpacity="0.45" strokeWidth="14" fill="none" strokeLinecap="round" />
                {/* Roads */}
                <path d="M 40 60 L 380 80" stroke="#8E9CCF" strokeOpacity="0.25" strokeWidth="1.5" />
                <path d="M 160 0 L 200 300" stroke="#8E9CCF" strokeOpacity="0.25" strokeWidth="1.5" />
                <path d="M 80 40 L 320 280" stroke="#8E9CCF" strokeOpacity="0.18" strokeWidth="1" />
                {/* Label */}
                <text x="20" y="30" fill="#192B72" fontSize="12" fontWeight="600" opacity="0.7">DHAKA</text>
              </svg>

              {chambers.map((c) => (
                <Link
                  key={c.slug}
                  to={`/chambers/${c.slug}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${c.mapPosition.x}%`, top: `${c.mapPosition.y}%` }}
                  aria-label={c.name}
                >
                  <span
                    className={cn(
                      'flex h-7 w-7 items-center justify-center rounded-full bg-brand-purple text-bg-warm shadow-md ring-4 ring-brand-purple/15 transition-all duration-200 ease-out-quint group-hover:scale-110',
                      c.isPrimary && 'h-9 w-9 ring-brand-purple/25 animate-pinpulse',
                    )}
                  >
                    <MapPin size={c.isPrimary ? 16 : 12} fill="currentColor" />
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-card px-2 py-1 text-[10px] font-semibold text-ink-body shadow-card opacity-0 transition-opacity group-hover:opacity-100">
                    {c.shortName}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Schedule list */}
          <div className="md:col-span-2 space-y-3">
            {chambers.map((c) => (
              <Reveal key={c.slug}>
                <Link
                  to={`/chambers/${c.slug}`}
                  className="glass-card flex items-start gap-3 p-4"
                >
                  <span
                    className={cn(
                      'mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-bg-warm',
                      c.isPrimary ? 'bg-brand-purple' : 'bg-brand-purpleLight',
                    )}
                  >
                    <MapPin size={12} fill="currentColor" />
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-ink-body">{c.shortName}{c.isPrimary && <span className="ml-1 text-brand-purple text-xs">· primary</span>}</h4>
                    <p className="mt-0.5 text-xs body-muted">{c.area}</p>
                    <p className="mt-1 text-xs text-ink-body">
                      {c.schedule.map((s) => s.day.slice(0, 3)).join(' · ')} — {c.schedule[0].time}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

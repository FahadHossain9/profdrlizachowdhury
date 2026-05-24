import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Check, X, Clock, Wallet, Activity, Stethoscope, Sparkles, FlaskConical, Syringe, Heart, User2, Scan, CircleDot } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { useResource, treatmentStore } from '../lib/store';
import { whatsappLink } from '../lib/whatsapp';
import { FinalCTA } from '../components/content/FinalCTA';
import { cn } from '../lib/cn';

const iconMap = {
  flask: FlaskConical,
  syringe: Syringe,
  heart: Heart,
  male: User2,
  scope: Scan,
  uterus: CircleDot,
  baby: Heart,
} as const;

const fmtBdt = (n: number) =>
  '৳ ' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

// Parse a success-rate string like "38–45%" or "+15–20%" and return midpoint as number.
const parseRateMid = (s: string): number => {
  const cleaned = s.replace(/[+%]/g, '').trim();
  const m = cleaned.match(/(\d+)(?:[–-](\d+))?/);
  if (!m) return 0;
  const lo = Number(m[1]);
  const hi = m[2] ? Number(m[2]) : lo;
  return (lo + hi) / 2;
};

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const treatments = useResource(treatmentStore);
  const treatment = slug ? treatments.find((t) => t.slug === slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!treatment) return <Navigate to="/treatments" replace />;

  const Icon = iconMap[treatment.icon] ?? FlaskConical;
  const totalDays = treatment.process.reduce((acc, p) => {
    const m = p.duration.match(/(\d+)(?:[–-](\d+))?\s*(day|week|min|hour)/i);
    if (!m) return acc;
    const lo = Number(m[1]);
    const hi = m[2] ? Number(m[2]) : lo;
    const mid = (lo + hi) / 2;
    const unit = m[3].toLowerCase();
    if (unit === 'day') return acc + mid;
    if (unit === 'week') return acc + mid * 7;
    return acc;
  }, 0);
  const topRate = treatment.successRate[0];
  const maxRateMid = Math.max(...treatment.successRate.map((r) => parseRateMid(r.rate)), 100);

  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow={treatment.isPriority ? 'PRIMARY TREATMENT' : 'TREATMENT'}
        title={treatment.name}
        body={treatment.oneLiner}
        align="left"
        crumbs={[{ label: 'Treatments', to: '/treatments' }, { label: treatment.name }]}
      />

      {/* Quick facts panel — sits just under the hero banner */}
      <Section tone="aurora" spacing="md">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 -mt-12 md:-mt-16 relative z-10">
              <FactCard
                icon={Wallet}
                label="Cost range"
                value={`${fmtBdt(treatment.cost.rangeBdt[0])} — ${fmtBdt(treatment.cost.rangeBdt[1])}`}
              />
              {totalDays > 0 && (
                <FactCard
                  icon={Clock}
                  label="Total duration"
                  value={`~${Math.round(totalDays)} days`}
                />
              )}
              {topRate && (
                <FactCard
                  icon={Activity}
                  label={`Success · ${topRate.band}`}
                  value={topRate.rate}
                />
              )}
              <FactCard
                icon={Stethoscope}
                label="Process steps"
                value={`${treatment.process.length} stages`}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Indications — "is this for me?" */}
      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-3">IS THIS FOR ME?</p>
                <h2 className="display-serif-l text-ink-body mb-4">
                  {treatment.name} is typically recommended when…
                </h2>
                <p className="body-muted text-sm leading-relaxed">
                  These are the most common clinical situations where this treatment is the right next step. Your individual case is always discussed openly in the consultation room.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {treatment.indications.map((ind, i) => (
                  <li
                    key={ind}
                    className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 hover:border-brand-purple/30 hover:shadow-sm transition-all"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-gradient text-white shadow-sm">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-brand-purple font-semibold mb-0.5">
                        Indication {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className="text-sm text-ink-body leading-snug">{ind}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process — visual vertical timeline */}
      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-3">THE PROCESS</p>
              <h2 className="display-serif-l mb-4">Step by step, at this practice.</h2>
              <p className="body-muted">
                Each cycle moves through these stages. Timelines vary by individual; the durations below are typical.
              </p>
            </div>
          </Reveal>
          <Stagger className="relative" staggerChildren={0.05}>
            {/* Vertical connector line */}
            <div aria-hidden className="absolute left-5 md:left-7 top-3 bottom-3 w-px bg-gradient-to-b from-brand-purple/60 via-brand-purple/30 to-transparent" />

            <div className="space-y-4">
              {treatment.process.map((step) => (
                <StaggerItem key={step.step}>
                  <article className="relative flex gap-4 md:gap-6">
                    {/* Step badge — overlaps the timeline */}
                    <span className="relative z-10 inline-flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-purple-gradient text-white text-sm font-bold shadow-lg shadow-brand-purple/25 ring-4 ring-bg-cream">
                      {String(step.step).padStart(2, '0')}
                    </span>
                    <div className="flex-1 rounded-xl border border-line bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="h3 text-ink-body">{step.title}</h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-purpleSoft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-purpleDark">
                          <Clock size={10} />
                          {step.duration}
                        </span>
                      </div>
                      <p className="body body-muted leading-relaxed">{step.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Container>
      </Section>

      {/* Differentiator — bold pullquote treatment */}
      <Section tone="aurora" spacing="xl">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-3xl bg-purple-gradient p-8 md:p-12 lg:p-16 text-white shadow-[0_30px_80px_-30px_rgba(25,43,114,0.45)] relative overflow-hidden">
              <span aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
              <span aria-hidden className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-purpleLight/15 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 border border-white/15 px-3 py-1.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
                    <Icon size={11} strokeWidth={2.2} className="text-brand-purpleDeep" />
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/85">
                    What makes this practice different
                  </p>
                </div>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-white" style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 50" }}>
                  {treatment.differentiator}
                </p>
                <p className="mt-6 text-sm text-white/70 font-medium">— Dr. Liza Chowdhury</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Cost + Success rates side by side */}
      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Cost transparency card */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purpleDark">
                    <Wallet size={16} />
                  </span>
                  <p className="eyebrow text-brand-purple">COST TRANSPARENCY</p>
                </div>
                <p className="display-serif-m text-ink-deep mb-6 tabular-nums">
                  {fmtBdt(treatment.cost.rangeBdt[0])} – {fmtBdt(treatment.cost.rangeBdt[1])}
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-accent-sage mb-2.5 uppercase tracking-wider">Included</p>
                    <ul className="space-y-1.5">
                      {treatment.cost.included.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-body leading-snug">
                          <Check size={13} className="mt-1 shrink-0 text-accent-sage" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink-muted mb-2.5 uppercase tracking-wider">Not included</p>
                    <ul className="space-y-1.5">
                      {treatment.cost.excluded.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-body/70 leading-snug">
                          <X size={13} className="mt-1 shrink-0 text-ink-muted" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 pt-4 border-t border-line text-xs body-muted italic leading-relaxed">{treatment.cost.note}</p>
              </div>
            </Reveal>

            {/* Success rate visualization */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purple">
                    <Activity size={16} />
                  </span>
                  <p className="eyebrow text-brand-purple">SUCCESS RATES</p>
                </div>
                <h3 className="display-serif-m text-ink-deep mb-6">Honest, age-banded.</h3>
                <ul className="space-y-4">
                  {treatment.successRate.map((r) => {
                    const mid = parseRateMid(r.rate);
                    const pct = Math.min(100, (mid / Math.min(maxRateMid, 100)) * 100);
                    return (
                      <li key={r.band}>
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <span className="text-sm font-medium text-ink-body">{r.band}</span>
                          <span className="font-serif text-2xl text-brand-purpleDark tabular-nums">{r.rate}</span>
                        </div>
                        <div className="h-2 rounded-full bg-bg-cream overflow-hidden">
                          <div
                            className="h-full bg-purple-gradient transition-all duration-1000 ease-out-quint"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        {r.note && (
                          <p className="mt-1.5 text-[11px] text-ink-muted italic">{r.note}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-6 pt-4 border-t border-line text-xs body-muted italic leading-relaxed">
                  Success rates depend on individual factors. Realistic outcomes are discussed during your consultation.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow mb-3">QUESTIONS</p>
              <h2 className="display-serif-l">Honest answers to common questions.</h2>
            </div>
          </Reveal>
          <div className="max-w-3xl space-y-3">
            {treatment.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q}>
                  <div className={cn(
                    'rounded-xl border bg-white overflow-hidden transition-all duration-200',
                    isOpen ? 'border-brand-purple/30 shadow-md' : 'border-line shadow-sm hover:border-brand-purple/20',
                  )}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="flex items-start gap-3">
                        <span className={cn(
                          'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors',
                          isOpen ? 'bg-brand-purple text-white' : 'bg-brand-purpleSoft text-brand-purpleDark',
                        )}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base font-semibold text-ink-body">{f.q}</span>
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn('shrink-0 text-brand-purple transition-transform duration-200', isOpen && 'rotate-180')}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-out-quint',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-14 body body-muted leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Up next — related treatments */}
      <Section tone="warm" spacing="lg">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-brand-purple" />
                <p className="text-sm font-semibold text-ink-body uppercase tracking-wider">Explore other treatments</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {treatments.filter((other) => other.slug !== treatment.slug).slice(0, 4).map((other) => (
                  <Link
                    key={other.slug}
                    to={`/treatments/${other.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-body hover:border-brand-purple hover:text-brand-purple transition-colors"
                  >
                    {other.name}
                    <ArrowUpRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Dark consultation CTA */}
      <Section tone="dark" spacing="lg">
        <Container>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-2xl md:text-3xl max-w-xl">
              Discuss your specific case in a {treatment.name} consultation.
            </p>
            <a href={whatsappLink('ufcl')} target="_blank" rel="noreferrer" className="btn-pill bg-bg-warm text-brand-purpleDark hover:bg-brand-purpleSoft">
              Book a {treatment.name} consultation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-3.5 md:p-4 shadow-card">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-purpleSoft text-brand-purpleDark">
          <Icon size={12} />
        </span>
        <p className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold line-clamp-1">{label}</p>
      </div>
      <p className="text-sm md:text-base font-semibold text-ink-deep leading-tight tabular-nums">{value}</p>
    </div>
  );
}

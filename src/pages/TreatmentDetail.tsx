import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Check, X } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { getTreatment, treatments } from '../data/treatments';
import { whatsappLink } from '../lib/whatsapp';
import { FinalCTA } from '../components/content/FinalCTA';
import { cn } from '../lib/cn';

const fmtBdt = (n: number) =>
  '৳ ' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? getTreatment(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!treatment) return <Navigate to="/treatments" replace />;

  return (
    <>
      <SectionHero
        eyebrow={treatment.isPriority ? 'PRIMARY TREATMENT' : 'TREATMENT'}
        title={treatment.name}
        body={treatment.oneLiner}
        align="left"
      />

      <Section tone="cream" spacing="lg">
        <Container>
          <Reveal>
            <p className="eyebrow mb-4">IS THIS FOR ME?</p>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {treatment.indications.map((ind) => (
                <li key={ind} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purpleSoft text-brand-purple">
                    <Check size={12} />
                  </span>
                  <span className="body text-ink-body">{ind}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="warm" spacing="xl">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">THE PROCESS</p>
            <h2 className="display-serif-l mb-10">Step by step, at this practice.</h2>
          </Reveal>
          <Stagger className="space-y-5" staggerChildren={0.05}>
            {treatment.process.map((step) => (
              <StaggerItem key={step.step}>
                <div className="card-base flex gap-5 p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-bg-warm text-sm font-semibold">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="h3 text-ink-body">{step.title}</h3>
                      <span className="text-xs uppercase tracking-wider text-brand-purpleDark">{step.duration}</span>
                    </div>
                    <p className="mt-2 body body-muted">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="purple-soft" spacing="xl">
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="eyebrow">WHAT MAKES THIS PRACTICE DIFFERENT</p>
              <p className="body-large text-ink-body">{treatment.differentiator}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-3">COST TRANSPARENCY</p>
              <h2 className="display-serif-m mb-6">{fmtBdt(treatment.cost.rangeBdt[0])} – {fmtBdt(treatment.cost.rangeBdt[1])}</h2>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-ink-body mb-2">Included</p>
                  <ul className="space-y-1">
                    {treatment.cost.included.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm body-muted">
                        <Check size={14} className="mt-0.5 text-brand-purple" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-body mb-2">Not included</p>
                  <ul className="space-y-1">
                    {treatment.cost.excluded.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm body-muted">
                        <X size={14} className="mt-0.5 text-ink-muted" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs body-muted italic">{treatment.cost.note}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">SUCCESS RATES</p>
              <h2 className="display-serif-m mb-6">Honest, age-banded.</h2>
              <ul className="space-y-3">
                {treatment.successRate.map((r) => (
                  <li key={r.band} className="card-base flex items-baseline justify-between gap-4 p-4">
                    <span className="text-sm font-medium text-ink-body">{r.band}</span>
                    <span className="text-2xl font-semibold text-brand-purple">{r.rate}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs body-muted italic">Success rates depend on individual factors. We discuss realistic outcomes during your consultation.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">QUESTIONS</p>
            <h2 className="display-serif-l mb-10">Honest answers to common questions.</h2>
          </Reveal>
          <div className="max-w-3xl space-y-3">
            {treatment.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q}>
                  <div className="card-base overflow-hidden hover:translate-y-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-base font-semibold text-ink-body">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={cn('text-brand-purple transition-transform duration-200', isOpen && 'rotate-180')}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-out-quint',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 body body-muted">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="lg">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm body-muted">Up next</p>
              <div className="flex flex-wrap gap-3">
                {treatments.filter((other) => other.slug !== treatment.slug).slice(0, 3).map((other) => (
                  <Link key={other.slug} to={`/treatments/${other.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple underline-sweep">
                    {other.name}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

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

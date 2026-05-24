import { useState } from 'react';
import { Phone, MessageCircle, Check } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';
import { useResource, chamberStore, treatmentStore, appointmentStore } from '../lib/store';
import { whatsappLink, hotline } from '../lib/whatsapp';
import { cn } from '../lib/cn';

export default function Contact() {
  const chambers = useResource(chamberStore);
  const treatments = useResource(treatmentStore);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string | null)?.trim() ?? '';
    const phone = (data.get('phone') as string | null)?.trim() ?? '';
    const email = (data.get('email') as string | null)?.trim() || undefined;
    const chamberSlug = (data.get('chamber') as string | null) ?? 'ufcl';
    const treatmentInterest = (data.get('treatment') as string | null) || undefined;
    const message = (data.get('message') as string | null)?.trim() || undefined;

    if (!name || !phone) {
      setError("We'll need your name and phone to call you back.");
      return;
    }
    setError(null);

    appointmentStore.upsert({
      id: `apt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      phone,
      email,
      chamberSlug,
      treatmentInterest,
      message,
      status: 'new',
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <SectionHero
        eyebrow="CONTACT"
        title="When you're ready to talk, I'm here."
        body="Three ways to reach the practice. WhatsApp is fastest. The form is for non-urgent enquiries — a coordinator replies within 4 hours."
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="space-y-6">
              <a
                href={whatsappLink('ufcl')}
                target="_blank"
                rel="noreferrer"
                className="card-base flex items-center justify-between gap-4 p-6 hover:bg-brand-purpleSoft"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1FAB54]">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink-body">WhatsApp Dr. Liza's office</p>
                    <p className="text-sm body-muted">Fastest path · usual reply within 4 hours</p>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold">Chat →</span>
              </a>

              <a
                href={`tel:${hotline.replace(/\s|-/g, '')}`}
                className="card-base flex items-center justify-between gap-4 p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-purpleSoft text-brand-purple">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink-body">Call the hotline</p>
                    <p className="text-sm body-muted">{hotline} · 10 AM – 8 PM</p>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold">Call →</span>
              </a>

              <div className="card-base p-6">
                <p className="eyebrow mb-3">WHAT TO EXPECT</p>
                <ol className="space-y-2 text-sm text-ink-body">
                  <li>1. A patient coordinator replies, usually within 4 hours.</li>
                  <li>2. You'll be asked basic non-clinical details: preferred time, preferred chamber.</li>
                  <li>3. Clinical history is for the consultation room — not the phone.</li>
                </ol>
                <p className="mt-4 text-xs body-muted italic">
                  For medical emergencies, please call 999 or visit your nearest emergency department. This form is for non-urgent booking and enquiries.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="card-base p-7 space-y-5 hover:translate-y-0" noValidate>
                <p className="eyebrow">SEND AN ENQUIRY</p>
                <h2 className="h2 text-ink-body">A coordinator will call you back.</h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-body mb-1.5">
                    Your name <span className="text-brand-purple">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-body mb-1.5">
                      Phone <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="01XXX-XXXXXX"
                      className="w-full rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-body mb-1.5">
                      Email <span className="text-ink-muted/70 font-normal">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="chamber" className="block text-sm font-medium text-ink-body mb-1.5">
                      Preferred chamber
                    </label>
                    <select
                      id="chamber"
                      name="chamber"
                      defaultValue="ufcl"
                      className="w-full rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    >
                      {chambers.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.shortName}
                          {c.isPrimary ? ' (primary)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-ink-body mb-1.5">
                      Interested in
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      defaultValue=""
                      className="w-full rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    >
                      <option value="">Not sure yet</option>
                      {treatments.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-body mb-1.5">
                    What can we help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Optional — a sentence or two helps us prepare for the call."
                    className="w-full resize-none rounded-lg border border-line bg-bg-warm px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                  />
                </div>

                {error && (
                  <p className="text-sm text-[#B5394A]">{error}</p>
                )}

                <button type="submit" className={cn('btn-primary w-full justify-center', submitted && 'bg-[#2D7A4C] hover:bg-[#2D7A4C]')}>
                  {submitted ? (
                    <>
                      <Check size={18} />
                      Got it — we'll call you within 4 hours
                    </>
                  ) : (
                    <>Send my enquiry →</>
                  )}
                </button>

                <p className="text-[11px] body-muted italic">
                  Your enquiry is sent directly to the practice intake. A coordinator will reach out by phone or WhatsApp within 4 working hours.
                </p>
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

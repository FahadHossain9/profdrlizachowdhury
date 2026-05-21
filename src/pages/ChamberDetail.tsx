import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';
import { PlaceholderCard } from '../components/content/PlaceholderCard';
import { Portrait } from '../components/content/Portrait';
import { getChamber } from '../data/chambers';
import { whatsappLink, type ChamberSlug } from '../lib/whatsapp';
import { FinalCTA } from '../components/content/FinalCTA';

export default function ChamberDetail() {
  const { slug } = useParams<{ slug: string }>();
  const chamber = slug ? getChamber(slug) : undefined;
  if (!chamber) return <Navigate to="/chambers" replace />;

  return (
    <>
      <SectionHero
        eyebrow={chamber.isPrimary ? 'PRIMARY CHAMBER' : 'CONSULTATION CHAMBER'}
        title={chamber.name}
        body={chamber.role}
        align="left"
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-3 space-y-8">
              <div>
                <p className="eyebrow mb-2">SCHEDULE</p>
                <ul className="space-y-2">
                  {chamber.schedule.map((s) => (
                    <li key={s.day} className="flex items-baseline gap-3">
                      <span className="w-28 font-semibold text-ink-body">{s.day}</span>
                      <span className="body-muted">{s.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow mb-2">ADDRESS</p>
                <p className="body text-ink-body flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-brand-purple shrink-0" />
                  {chamber.address}
                </p>
              </div>

              <div>
                <p className="eyebrow mb-2">CONTACT</p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-center gap-2">
                    <Phone size={16} className="text-brand-purple" />
                    <a className="text-ink-body hover:underline" href={`tel:${chamber.hotline.replace(/-/g, '')}`}>{chamber.hotline}</a>
                  </li>
                  {chamber.alternateHotline && (
                    <li className="flex items-center gap-2">
                      <Phone size={16} className="text-brand-purple" />
                      <a className="text-ink-body hover:underline" href={`tel:${chamber.alternateHotline.replace(/-/g, '')}`}>{chamber.alternateHotline}</a>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <p className="eyebrow mb-2">DR. LIZA'S TITLE HERE</p>
                <p className="body text-ink-body">{chamber.titleHeldHere}</p>
              </div>

              <div>
                <p className="eyebrow mb-2">PARKING & ACCESS</p>
                <p className="body body-muted">{chamber.parkingNotes}</p>
              </div>

              <a
                href={whatsappLink(chamber.slug as ChamberSlug)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Book at this chamber on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              {chamber.slug === 'ufcl' ? (
                <Portrait
                  src="/images/portraits/drliza-ufcl-fulllength.webp"
                  alt="Dr. Liza Chowdhury at the Uttara Fertility Centre, full-length with UFCL signage"
                  aspect="3-4"
                />
              ) : (
                <PlaceholderCard
                  label={`${chamber.shortName} — exterior & interior photography`}
                  specRef="Master Spec §5.1 · chamber shoot"
                  aspect="3-4"
                />
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="h2 mb-4">First visit</h2>
              <ul className="space-y-2">
                {chamber.whatToBringFirst.map((item) => (
                  <li key={item} className="flex items-start gap-2 body text-ink-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 mb-4">Follow-up visits</h2>
              <ul className="space-y-2">
                {chamber.whatToBringFollowUp.map((item) => (
                  <li key={item} className="flex items-start gap-2 body text-ink-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

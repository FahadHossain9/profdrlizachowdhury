import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Stagger, StaggerItem } from '../components/motion/Reveal';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { chambers } from '../data/chambers';
import { ChamberMap } from '../components/content/ChamberMap';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Chambers() {
  return (
    <>
      <SectionHero
        eyebrow="CHAMBERS & BOOKING"
        title="Five chambers across Dhaka. UFCL is home."
        body="The Uttara Fertility Centre is the primary practice — every IVF cycle runs through its laboratory. The other four chambers exist for consultation and follow-up, closer to where you live."
      />

      <ChamberMap />

      <Section tone="warm" spacing="xl">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2" staggerChildren={0.06}>
            {chambers.map((c) => (
              <StaggerItem key={c.slug}>
                <Link to={`/chambers/${c.slug}`} className="card-base group flex h-full flex-col gap-4 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow">{c.isPrimary ? 'PRIMARY' : 'CONSULTATION'}</p>
                      <h2 className="h2 mt-2 text-ink-body group-hover:text-brand-purple transition-colors">{c.shortName}</h2>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-purpleSoft text-brand-purple">
                      <MapPin size={16} />
                    </span>
                  </div>
                  <p className="text-sm body-muted">{c.address}</p>
                  <div className="mt-2 space-y-1 text-sm">
                    {c.schedule.map((s) => (
                      <p key={s.day} className="text-ink-body">
                        <span className="font-semibold">{s.day}</span> <span className="body-muted">— {s.time}</span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-line">
                    <p className="text-xs body-muted">{c.hotline}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
                      View chamber
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

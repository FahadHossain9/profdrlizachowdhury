import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Stagger, StaggerItem } from '../components/motion/Reveal';
import { useResource, treatmentStore } from '../lib/store';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Treatments() {
  const treatments = useResource(treatmentStore);
  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow="TREATMENTS"
        title="Seven focused treatments. One careful philosophy."
        body="Conservative, fertility-preserving, evidence-based, individualised. The treatments below are the only ones offered at this practice — and they are the only ones we are confident recommending."
        crumbs={[{ label: 'Treatments' }]}
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.05}>
            {treatments.map((tr) => (
              <StaggerItem key={tr.slug}>
                <Link
                  to={`/treatments/${tr.slug}`}
                  className="card-base group relative flex h-full flex-col gap-4 p-6"
                >
                  <p className="eyebrow">{tr.isPriority ? 'PRIMARY' : 'OFFERED'}</p>
                  <h3 className="h2 text-ink-body group-hover:text-brand-purple transition-colors">
                    {tr.name}
                  </h3>
                  <p className="body-muted body">{tr.oneLiner}</p>
                  <div className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
                    Learn more
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

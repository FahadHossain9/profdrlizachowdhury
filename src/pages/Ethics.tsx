import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';
import { FinalCTA } from '../components/content/FinalCTA';

const principles = [
  {
    title: 'Married couples, own gametes',
    body: 'This practice provides ART services for married couples using their own gametes, in alignment with Bangladeshi medical and bioethical standards. Donor gametes and surrogacy are not offered. This is a clinical principle, not a constraint — and the conversation about it is always direct and respectful.',
  },
  {
    title: 'Patient consent and autonomy',
    body: 'Every procedure begins with a written and verbal informed-consent conversation. No protocol moves forward without the patient and partner understanding what is being done, what the alternatives are, and what is realistic.',
  },
  {
    title: 'Confidentiality',
    body: 'Patient records are held in strict confidence. No clinical information is shared with third parties without explicit consent, in alignment with BMDC Article 2.3.4.3. Patient stories on this website are only published with documented consent and the right to withdraw at any time.',
  },
  {
    title: 'Transparency',
    body: 'Costs are discussed openly. Success rates are presented age-banded and honestly — no inflated numbers. Probabilities, not guarantees, frame every treatment plan.',
  },
  {
    title: 'Evidence-based protocols',
    body: 'Treatment protocols are guided by international guidelines (ESHRE, ASRM) adapted to local clinical realities and informed by the practice\'s own published research on IVF outcomes in resource-constrained settings.',
  },
];

export default function Ethics() {
  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow="PRACTICE ETHICS"
        title="How I practise, and why."
        crumbs={[{ label: 'Ethics' }]}
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <div className="mx-auto max-w-prose space-y-8">
            {principles.map((p) => (
              <Reveal key={p.title}>
                <article>
                  <h2 className="h2 text-ink-body mb-3">{p.title}</h2>
                  <p className="body-large body-muted">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}

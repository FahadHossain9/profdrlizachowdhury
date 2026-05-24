import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/motion/Reveal';

export default function Privacy() {
  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow="PRIVACY & CONFIDENTIALITY"
        title="What we collect, and what we don't."
        crumbs={[{ label: 'Privacy' }]}
      />
      <Section tone="warm" spacing="xl">
        <Container>
          <div className="mx-auto max-w-prose space-y-6 body-large body-muted">
            <Reveal>
              <p>
                The Dr. Liza Chowdhury practice treats medical confidentiality as a clinical principle, not a
                legal afterthought. This page summarises how patient information is handled on this website and
                in the practice.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">No clinical information is requested online</h2>
              <p>
                The contact form on this site requests only your name, phone number, preferred chamber, and an
                optional note about what you need help with. Clinical history — diagnoses, medication, prior
                treatments — is only discussed in the consultation room or, where appropriate, on a secure phone
                conversation initiated by the patient.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">Patient records</h2>
              <p>
                All clinical records are held at the practice's chambers and are subject to BMDC's confidentiality
                requirements under Article 2.3.4.3. No clinical record is ever shared with a third party without
                explicit patient consent.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">WhatsApp messages</h2>
              <p>
                Messages sent via WhatsApp are subject to WhatsApp's end-to-end encryption. Within the practice,
                messages are handled by the patient coordinator and treated under the same confidentiality
                standards as in-person communication.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">Cookies and analytics</h2>
              <p>
                This site uses minimal first-party cookies for language preference. The production build will add
                privacy-respecting analytics (no third-party tracking). No advertising trackers are in use.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">Patient stories</h2>
              <p>
                Stories published on this site are sourced only from patients who provide written informed consent
                after reviewing the final draft. Consent may be withdrawn at any time, and stories will be removed
                from the site within seven working days of a withdrawal request.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="h2 text-ink-body">Contact for privacy concerns</h2>
              <p>
                For any privacy-related question, please contact the practice via the hotline or WhatsApp link
                provided on the Contact page.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

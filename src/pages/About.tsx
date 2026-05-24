import { Link } from 'react-router-dom';
import { SectionHero } from '../components/content/SectionHero';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { Portrait } from '../components/content/Portrait';
import { credentials } from '../data/credentials';
import { FinalCTA } from '../components/content/FinalCTA';

export default function About() {
  return (
    <>
      <SectionHero
        tone="gradient"
        eyebrow="ABOUT"
        title="A pioneer, a scholar, a clinician."
        body="Major General Prof. Dr. Liza Chowdhury (Retd.) is the founder of Bangladesh's first government fertility centre and the architect of an academic career that has trained the country's next generation of OBGYN specialists."
        crumbs={[{ label: 'About' }]}
      />

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="prose-base max-w-prose space-y-5 text-ink-body body-large">
                <p>
                  Dr. Liza Chowdhury’s story begins, like many Bangladeshi doctors of her generation, at
                  Mymensingh Medical College — but it diverges almost immediately. She entered the
                  Bangladesh Army Medical Corps, then trained through DGO, MCPS and FCPS while serving.
                  Fellowship programmes in India and Germany took her into Infertility and Reproductive
                  Medicine at a time when the field barely existed in Bangladesh.
                </p>
                <p>
                  She returned and built. As Founder Head of the Department of Obstetrics & Gynaecology at
                  the Armed Forces Medical College, she shaped curricula and trained doctors who today
                  staff the country’s major teaching hospitals. As Founder Head of the Department of
                  Reproductive Endocrinology and Infertility at CMH Dhaka, she did something quieter and,
                  in retrospect, more lasting: she set up the first government-run fertility centre in
                  Bangladesh’s history.
                </p>
                <p>
                  After thirty-six peer-reviewed publications, a Major General’s rank, and the formal
                  recognition of having trained the country’s senior fertility specialists, she retired
                  from the Army and founded the Uttara Fertility Centre — a private practice with the
                  same standards she had built into the government programme.
                </p>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <Portrait
                src="/images/portraits/drliza-about.webp"
                alt="Dr. Liza Chowdhury at the Uttara Fertility Centre desk"
                aspect="3-4"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">CAREER MILESTONES</p>
            <h2 className="display-serif-l mb-10">A thirty-five-year arc.</h2>
          </Reveal>
          <Stagger className="space-y-4 max-w-3xl" staggerChildren={0.05}>
            {credentials.timeline.map((m) => (
              <StaggerItem key={m.year}>
                <div className="flex items-start gap-5 border-l-2 border-brand-purple/30 pl-5">
                  <span className="w-20 shrink-0 text-sm font-semibold text-brand-purpleDark">{m.year}</span>
                  <p className="body text-ink-body">{m.event}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="warm" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Portrait
                src="/images/portraits/drliza-quote.webp"
                alt="Dr. Liza Chowdhury — portrait at UFCL"
                aspect="4-5"
              />
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="space-y-5">
                <p className="eyebrow">PRACTICE PHILOSOPHY</p>
                <p className="pullquote text-ink-body">
                  &ldquo;I do not promise patients a baby. I promise them that every decision will be made carefully, every protocol will be tailored, and every outcome will be discussed with the honesty they deserve.&rdquo;
                </p>
                <p className="body-muted text-sm">— Dr. Liza Chowdhury</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="xl">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3">CREDENTIALS</p>
                <h2 className="display-serif-l">Education, fellowships, memberships.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <Reveal>
              <h3 className="h3 mb-4">Education</h3>
              <ul className="space-y-3">
                {credentials.education.map((e) => (
                  <li key={e.qualification}>
                    <p className="font-semibold text-ink-body">{e.qualification}</p>
                    <p className="text-sm body-muted">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="h3 mb-4">Memberships</h3>
              <ul className="space-y-2">
                {credentials.memberships.map((m) => (
                  <li key={m.abbr} className="flex items-baseline gap-2">
                    <span className="font-semibold text-brand-purple">{m.abbr}</span>
                    <span className="text-sm body-muted">— {m.full}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="h3 mb-4">Roles</h3>
              <ul className="space-y-3">
                {credentials.identity.currentTitles.map((title) => (
                  <li key={title} className="text-sm text-ink-body">{title}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs body-muted">
                Examiner: Dhaka University, BUP, BCPS (MBBS, DGO, MCPS, FCPS).<br />
                Academic reviewer, Cambridge University Press.
              </p>
              <Link to="/about" className="mt-6 inline-flex text-sm font-semibold text-brand-purple underline-sweep">
                See full publications →
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Reveal } from '../motion/Reveal';
import { cn } from '../../lib/cn';

export function SectionHero({
  eyebrow,
  title,
  body,
  tone = 'warm',
  align = 'center',
  bangla,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: 'warm' | 'cream';
  align?: 'center' | 'left';
  bangla?: boolean;
}) {
  return (
    <Section tone={tone} spacing="lg">
      <Container>
        <Reveal>
          <div className={cn('max-w-3xl space-y-4', align === 'center' && 'mx-auto text-center')}>
            <p className={cn('eyebrow', bangla && 'font-bangla')}>{eyebrow}</p>
            <h1 className={cn('display-l text-ink-body', bangla && 'font-bangla')}>{title}</h1>
            {body && <p className={cn('body-large body-muted', bangla && 'font-bangla body-bn')}>{body}</p>}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export default function NotFound() {
  return (
    <Section tone="warm" spacing="xl">
      <Container>
        <div className="mx-auto max-w-md text-center space-y-6 py-20">
          <p className="eyebrow">404</p>
          <h1 className="display-l">This page doesn't exist.</h1>
          <p className="body-muted">It may have moved, or it may have been part of the demo's stub routes that did not survive a recent edit.</p>
          <Link to="/" className="btn-primary inline-flex">Take me home</Link>
        </div>
      </Container>
    </Section>
  );
}

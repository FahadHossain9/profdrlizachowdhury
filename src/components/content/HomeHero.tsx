import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { Container } from '../layout/Container';
import { useLanguage } from '../../hooks/useLanguage';
import { easing, duration } from '../../lib/tokens';
import { Portrait } from './Portrait';
import { cn } from '../../lib/cn';

export function HomeHero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-bg-warm">
      {/* Soft decorative ornament */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -left-12 top-20 hidden h-44 w-44 text-accent-blush/40 lg:block"
      >
        <path
          d="M40 100 Q 40 40, 100 40 Q 160 40, 160 100 Q 160 160, 100 160 Q 40 160, 40 100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M60 100 Q 60 60, 100 60 Q 140 60, 140 100 Q 140 140, 100 140 Q 60 140, 60 100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>

      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-32">
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.05 }}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-10 bg-accent-gold" />
            <p className={cn('eyebrow text-accent-gold', lang === 'bn' && 'font-bangla')}>{t.hero.eyebrow}</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.film, ease: easing.enter, delay: 0.15 }}
            className={cn('display-serif-xl text-ink-body', lang === 'bn' && 'font-bangla')}
          >
            <span>{t.hero.headlineLead}</span>{' '}
            <span className="italic text-brand-purple/90">{t.hero.headlineEmph}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.35 }}
            className={cn('body-large body-muted max-w-prose', lang === 'bn' && 'font-bangla body-bn')}
          >
            {t.hero.subhead}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.55 }}
            className="font-bangla text-ink-body/70 text-lg leading-relaxed"
          >
            {t.hero.subheadBn}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <Link to="/contact" className="btn-primary">
              <Calendar size={18} />
              <span className={cn(lang === 'bn' && 'font-bangla')}>{t.hero.ctaPrimary}</span>
            </Link>
            <Link to="/learning" className="btn-secondary">
              <Play size={16} />
              <span className={cn(lang === 'bn' && 'font-bangla')}>{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration.film, ease: easing.enter, delay: 0.25 }}
          className="relative"
        >
          {/* soft blush halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent-blush/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-purpleSoft blur-3xl"
          />
          <Portrait
            src="/images/portraits/drliza-hero.webp"
            srcSmall="/images/portraits/drliza-hero-800.webp"
            alt="Dr. Liza Chowdhury at the Uttara Fertility Centre reception"
            aspect="3-4"
            priority
            className="relative shadow-soft"
          />
        </motion.div>
      </Container>
    </section>
  );
}

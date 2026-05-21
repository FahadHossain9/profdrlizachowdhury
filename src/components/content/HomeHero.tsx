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
      <Container className="relative grid grid-cols-1 items-center gap-10 py-12 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.05 }}
            className={cn('eyebrow', lang === 'bn' && 'font-bangla')}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.film, ease: easing.enter, delay: 0.15 }}
            className={cn('display-xl text-ink-body', lang === 'bn' && 'font-bangla')}
          >
            <span>{t.hero.headlineLead}</span>{' '}
            <span className="font-serif italic font-normal">{t.hero.headlineEmph}</span>
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
            className="font-bangla text-ink-body/80 text-lg leading-relaxed"
          >
            {t.hero.subheadBn}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 pt-2"
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
          <Portrait
            src="/images/portraits/drliza-hero.webp"
            srcSmall="/images/portraits/drliza-hero-800.webp"
            alt="Dr. Liza Chowdhury at the Uttara Fertility Centre reception"
            aspect="3-4"
            priority
            className="shadow-2xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}

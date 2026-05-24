import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { useLanguage } from '../../hooks/useLanguage';
import { easing, duration } from '../../lib/tokens';
import { Portrait } from './Portrait';
import { cn } from '../../lib/cn';

export function HomeHero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-28">
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.05 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5"
          >
            <Sparkles size={13} className="text-accent-gold" />
            <p className={cn('eyebrow text-ink-body/80', lang === 'bn' && 'font-bangla')}>{t.hero.eyebrow}</p>
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

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.85 }}
            className="flex items-center gap-2 pt-2 text-xs body-muted"
          >
            <ShieldCheck size={14} className="text-accent-sage" />
            <span className={cn(lang === 'bn' && 'font-bangla')}>
              {t.hero.safety}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration.film, ease: easing.enter, delay: 0.25 }}
          className="relative"
        >
          {/* glass frame around the portrait */}
          <div className="glass-panel p-3 md:p-4">
            <Portrait
              src="/images/portraits/drliza-hero.webp"
              srcSmall="/images/portraits/drliza-hero-800.webp"
              alt="Dr. Liza Chowdhury at the Uttara Fertility Centre reception"
              aspect="3-4"
              priority
              className="relative !rounded-2xl overflow-hidden"
            />
          </div>

          {/* floating credential chip — sits over the portrait corner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 0.9 }}
            className="absolute -bottom-5 -left-4 md:-left-8 glass-card px-4 py-3 max-w-[220px]"
          >
            <p className={cn('text-[10px] uppercase tracking-wider text-accent-gold font-semibold', lang === 'bn' && 'font-bangla')}>
              {t.hero.credentialChip.years}
            </p>
            <p className={cn('text-sm font-semibold text-ink-body leading-snug mt-0.5', lang === 'bn' && 'font-bangla')}>
              {t.hero.credentialChip.label}
            </p>
            <p className={cn('text-[11px] body-muted mt-1', lang === 'bn' && 'font-bangla')}>
              {t.hero.credentialChip.note}
            </p>
          </motion.div>

          {/* floating live chip — top right */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.long, ease: easing.enter, delay: 1.0 }}
            className="absolute -top-3 right-2 md:-right-4 glass-pill px-3.5 py-1.5 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sage" />
            </span>
            <span className={cn('text-[11px] font-semibold text-ink-body', lang === 'bn' && 'font-bangla')}>{t.hero.livePill}</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

import { motion } from 'framer-motion';

/**
 * Soft aurora backdrop: cool navy-tinted orbs drift behind the page so glass
 * cards have something to refract from. Pure decoration — pointer-events
 * disabled, aria-hidden, respects prefers-reduced-motion via CSS reset.
 * Colours: brand.purpleLight (#8E9CCF) + accent.sage (#8FA48B, only).
 * Gold and blush orbs removed in 2026-05 cleanup to keep the cool brand
 * dominant without competing warm hues.
 */
export function AuroraBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 80% at 10% 0%, #F4F1FF 0%, transparent 60%), radial-gradient(100% 70% at 100% 20%, #EEF1F9 0%, transparent 65%), linear-gradient(180deg, #FFFFFF 0%, #FAFBFD 100%)',
      }}
    >
      <motion.span
        className="aurora-orb"
        style={{
          background: 'radial-gradient(circle, #8E9CCF 0%, transparent 70%)',
          width: 620,
          height: 620,
          top: '-12%',
          left: '-8%',
          opacity: 0.32,
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="aurora-orb"
        style={{
          background: 'radial-gradient(circle, #B0BCDB 0%, transparent 70%)',
          width: 540,
          height: 540,
          top: '20%',
          right: '-10%',
          opacity: 0.24,
        }}
        animate={{ x: [0, -25, 15, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.span
        className="aurora-orb"
        style={{
          background: 'radial-gradient(circle, #8FA48B 0%, transparent 70%)',
          width: 460,
          height: 460,
          bottom: '-8%',
          left: '40%',
          opacity: 0.14,
        }}
        animate={{ x: [0, 20, -25, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* fine grain noise overlay to keep the gradient from banding */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.18  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}

import { motion } from 'framer-motion';

/**
 * Soft aurora backdrop: warm orbs drift behind the page so the glass cards
 * have something to refract from. Pure decoration — pointer-events disabled,
 * aria-hidden, respects prefers-reduced-motion via CSS reset.
 */
export function AuroraBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 80% at 10% 0%, #FAF6F4 0%, transparent 60%), radial-gradient(100% 70% at 100% 20%, #EEF1F9 0%, transparent 65%), linear-gradient(180deg, #FFFFFF 0%, #FAFBFD 100%)',
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
          opacity: 0.28,
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="aurora-orb"
        style={{
          background: 'radial-gradient(circle, #C49585 0%, transparent 70%)',
          width: 540,
          height: 540,
          top: '20%',
          right: '-10%',
          opacity: 0.22,
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
          opacity: 0.18,
        }}
        animate={{ x: [0, 20, -25, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.span
        className="aurora-orb"
        style={{
          background: 'radial-gradient(circle, #B8956A 0%, transparent 75%)',
          width: 360,
          height: 360,
          top: '55%',
          left: '5%',
          opacity: 0.16,
        }}
        animate={{ x: [0, 18, -10, 0], y: [0, 12, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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

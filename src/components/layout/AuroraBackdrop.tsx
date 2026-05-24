/**
 * Soft aurora backdrop: cool navy-tinted orbs sitting behind the page so glass
 * cards have something to refract from. Pure decoration — pointer-events
 * disabled, aria-hidden.
 *
 * Orbs drift via CSS keyframes (transform-only, composited) instead of
 * Framer Motion's JS animate prop — keeps the main thread free during scroll
 * and avoids repainting the full viewport every frame.
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
      <span
        className="aurora-orb aurora-drift-a"
        style={{
          background: 'radial-gradient(circle, #8E9CCF 0%, transparent 70%)',
          width: 560,
          height: 560,
          top: '-12%',
          left: '-8%',
          opacity: 0.28,
        }}
      />
      <span
        className="aurora-orb aurora-drift-b"
        style={{
          background: 'radial-gradient(circle, #B0BCDB 0%, transparent 70%)',
          width: 500,
          height: 500,
          top: '20%',
          right: '-10%',
          opacity: 0.22,
        }}
      />
      <span
        className="aurora-orb aurora-drift-c"
        style={{
          background: 'radial-gradient(circle, #8FA48B 0%, transparent 70%)',
          width: 420,
          height: 420,
          bottom: '-8%',
          left: '40%',
          opacity: 0.12,
        }}
      />
    </div>
  );
}

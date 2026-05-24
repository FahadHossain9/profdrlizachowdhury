import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const REVEAL_DURATION = 0.45;
const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const REVEAL_AMOUNT = 0.15;

export function Reveal({
  children,
  delay = 0,
  y = 12,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: REVEAL_AMOUNT }}
      transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  staggerChildren = 0.04,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: REVEAL_AMOUNT }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 12,
  className,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

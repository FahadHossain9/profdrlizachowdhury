export const easing = {
  primary: [0.22, 1, 0.36, 1] as [number, number, number, number],
  enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
  exit: [0.7, 0, 0.84, 0] as [number, number, number, number],
};

export const duration = {
  micro: 0.15,
  short: 0.25,
  base: 0.35,
  long: 0.6,
  film: 1.2,
};

export const transition = {
  base: { duration: duration.base, ease: easing.primary },
  enter: { duration: duration.long, ease: easing.enter },
  exit: { duration: duration.short, ease: easing.exit },
  film: { duration: duration.film, ease: easing.enter },
};

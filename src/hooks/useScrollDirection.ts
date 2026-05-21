import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;
      if (Math.abs(diff) > 4) {
        setDirection(diff > 0 ? 'down' : 'up');
        lastY = y;
      }
      setScrolledPast(y > 100);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { direction, scrolledPast };
}

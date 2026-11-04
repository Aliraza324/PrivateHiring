import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = (isLocked = false) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenisRef.current = lenis;

    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isLocked) {
      if (lenisRef.current) lenisRef.current.stop();
      html.style.position = 'relative';
      html.style.overflow = 'hidden';
      html.style.height = '100%';
    } else {
      if (lenisRef.current) lenisRef.current.start();
      html.style.removeProperty('position');
      html.style.removeProperty('overflow');
      html.style.removeProperty('height');
    }
  }, [isLocked]);

  return lenisRef;
};


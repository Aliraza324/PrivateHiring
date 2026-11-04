import { useEffect } from 'react';

export const useAdaptiveScale = () => {
  useEffect(() => {
    const applyScale = () => {
      const html = document.documentElement;
      const FONT_BASE = 16;
      const BASE_W = 1920;
      const COEF = 0.6666;
      const reduction = ((BASE_W - window.innerWidth) / BASE_W) * 100 * COEF;
      const size = FONT_BASE - (FONT_BASE * reduction) / 100;

      if (size > FONT_BASE) {
        html.style.fontSize = size + 'px';
      } else {
        html.style.removeProperty('font-size');
      }
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    return () => {
      window.removeEventListener('resize', applyScale);
      document.documentElement.style.removeProperty('font-size');
    };
  }, []);
};


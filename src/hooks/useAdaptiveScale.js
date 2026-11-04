import { useEffect } from 'react';

export const useAdaptiveScale = () => {
  useEffect(() => {
    document.documentElement.style.fontSize = '16px';
    return () => {
      document.documentElement.style.removeProperty('font-size');
    };
  }, []);
};

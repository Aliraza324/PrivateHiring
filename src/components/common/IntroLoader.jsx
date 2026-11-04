import { useState, useEffect } from 'react';

export const IntroLoader = ({ onReady }) => {
  const [count, setCount] = useState(0);
  const [labelsFaded, setLabelsFaded] = useState(false);
  const [isWiping, setIsWiping] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (onReady) onReady();
      setIsRemoved(true);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setLabelsFaded(true);
          setTimeout(() => {
            setIsWiping(true);
            if (onReady) onReady();
            setTimeout(() => {
              setIsRemoved(true);
            }, 650);
          }, 200);
        }, 100);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onReady]);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden={isWiping}
      className={`fixed inset-0 z-[100] bg-[#08080a] text-[#f3f1ea] p-6 sm:p-10 flex flex-col sm:flex-row justify-end sm:justify-between items-start sm:items-end gap-3 sm:gap-4 transition-transform duration-[650ms] ${
        isWiping ? 'preloader-wipe pointer-events-none' : ''
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div
        className={`flex items-center gap-3 transition-opacity duration-300 ${
          labelsFaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#111114] border border-[rgba(243,241,234,0.2)] p-0.5">
          <img
            src="/logo.png"
            alt="Apex Private Hire Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#f3f1ea]">
          <span>APEX</span> <span className="text-[#ff3b1d]">PRIVATE HIRE</span>
        </div>
      </div>

      <div
        className={`font-display text-6xl sm:text-8xl lg:text-9xl tracking-tight tabular-nums text-[#f3f1ea] transition-opacity duration-300 ${
          labelsFaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span>{count}</span>
        <span className="text-[#ff3b1d] ml-1">%</span>
      </div>
    </div>
  );
};

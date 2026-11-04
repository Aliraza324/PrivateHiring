import { useState, useEffect } from 'react';
import { heroContent } from '../../mockup/hero';
import { Eyebrow } from '../common/Eyebrow';
import { ClipWords, ClipLines } from '../common/ClipText';
import { IconArrowRight, IconCar } from '../common/Icons';

export const Hero = ({ isReady, onExploreServices, onGetFareEstimate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(12, (scrollY / 800) * 12);

  return (
    <section className="relative rounded-[2rem] overflow-hidden min-h-[38rem] lg:min-h-[46rem] flex flex-col justify-between p-6 sm:p-10 lg:p-16 bg-[#08080a] border border-[rgba(243,241,234,0.1)] isolate">
      <div className="absolute inset-0 z-[-10] overflow-hidden">
        <div
          className="absolute inset-x-0 -top-[16%] h-[132%] w-full will-change-transform transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${parallaxOffset}%)` }}
        >
          <img
            src={heroContent.heroImage}
            alt="UK executive private hire transport"
            className="w-full h-full object-cover object-center opacity-20 brightness-75 contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08080a]/60 to-[#08080a]" />
      </div>

      <div className="pt-16 sm:pt-20 max-w-5xl relative z-10">
        <Eyebrow label={heroContent.badge} className="mb-6" />

        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.92] uppercase text-[#f3f1ea]">
          <ClipWords
            text="Reliable Private Hire &"
            isReady={isReady}
            stagger={100}
            baseDelay={100}
            wordClassName="text-[#f3f1ea]"
          />
          <br />
          <ClipWords
            text="Airport Transfers"
            isReady={isReady}
            stagger={120}
            baseDelay={400}
            wordClassName="text-[#ff3b1d]"
          />
          <span className="text-[#f3f1ea]">, </span>
          <ClipWords
            text="Made Simple."
            isReady={isReady}
            stagger={120}
            baseDelay={750}
            wordClassName="text-[#f3f1ea]"
          />
        </h1>

        <div className="mt-6 max-w-2xl">
          <ClipLines
            lines={[
              'Book your journey in minutes with flexible vehicle options,',
              'advance reservations, and professional UK transport service.'
            ]}
            isReady={isReady}
            baseDelay={900}
            stagger={90}
            lineClassName="text-base sm:text-lg text-[#807f78] leading-relaxed font-normal"
          />
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[rgba(243,241,234,0.1)] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 relative z-10">
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onGetFareEstimate}
            className="px-8 py-4 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display uppercase tracking-wider text-sm rounded-full shadow-2xl shadow-[#ff3b1d]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group"
          >
            <span>{heroContent.primaryCta}</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="px-6 py-4 bg-[#111114] hover:bg-[#17171b] text-[#f3f1ea] font-medium text-sm rounded-full border border-[rgba(243,241,234,0.15)] transition-all flex items-center gap-2"
          >
            <IconCar className="w-4 h-4 text-[#ff3b1d]" />
            <span>{heroContent.secondaryCta}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#807f78]">
          <span className="w-10 h-[1px] bg-[#ff3b1d]" />
          <span>Scroll to enter</span>
        </div>
      </div>
    </section>
  );
};

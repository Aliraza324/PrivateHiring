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
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem] flex flex-col justify-between px-3.5 pt-4 pb-7 sm:p-10 lg:p-14 bg-[#08080a] border border-[rgba(243,241,234,0.1)] isolate">
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

      <div className="pt-16 sm:pt-20 max-w-4xl relative z-10">
        <Eyebrow label={heroContent.badge} className="mb-4" />

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] uppercase text-[#f3f1ea]">
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

        <div className="mt-5 max-w-xl">
          <ClipLines
            lines={[
              'Book your journey in minutes with flexible vehicle options,',
              'advance reservations, and professional UK transport service.'
            ]}
            isReady={isReady}
            baseDelay={900}
            stagger={90}
            lineClassName="text-sm sm:text-base text-[#807f78] leading-relaxed font-normal"
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[rgba(243,241,234,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 relative z-10">
        <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onGetFareEstimate}
            className="flex-1 sm:flex-initial h-10 sm:h-11 px-2.5 sm:px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display uppercase tracking-tight sm:tracking-wider text-[10px] sm:text-xs rounded-full shadow-xl shadow-[#ff3b1d]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1 sm:gap-2 group whitespace-nowrap"
          >
            <span>{heroContent.primaryCta}</span>
            <IconArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="flex-1 sm:flex-initial h-10 sm:h-11 px-2 sm:px-6 bg-[#111114] hover:bg-[#17171b] text-[#f3f1ea] font-medium text-[10.5px] sm:text-xs rounded-full border border-[rgba(243,241,234,0.15)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
          >
            <IconCar className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
            <span className="hidden min-[380px]:inline">Explore </span>
            <span>Our Services</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#807f78]">
          <span className="w-8 h-[1px] bg-[#ff3b1d]" />
          <span>Scroll to enter</span>
        </div>
      </div>
    </section>
  );
};

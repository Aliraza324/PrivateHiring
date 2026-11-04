import { heroContent } from '../../mockup/hero';
import { IconShield, IconArrowRight, IconCar } from '../common/Icons';

export const Hero = ({ onExploreServices, onGetFareEstimate }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-10" />
        <img
          src={heroContent.heroImage}
          alt="Executive UK transport saloon"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            <IconShield className="w-3.5 h-3.5" />
            <span>{heroContent.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Reliable Private Hire &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Airport Transfers
            </span>
            , Made Simple.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            {heroContent.supportingText}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onGetFareEstimate}
              className="px-7 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>{heroContent.primaryCta}</span>
              <IconArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl border border-slate-700/80 backdrop-blur-sm transition-colors flex items-center gap-2"
            >
              <IconCar className="w-4 h-4 text-amber-400" />
              <span>{heroContent.secondaryCta}</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {heroContent.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


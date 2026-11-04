import { howItWorksSteps } from '../../mockup/howItWorks';
import { Eyebrow } from '../common/Eyebrow';
import { IconArrowRight } from '../common/Icons';

export const HowItWorks = ({ onBookNow }) => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <Eyebrow label="Simple 3-Step Process" className="mb-2" />
          <h2 className="font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea]">
            How Your Booking Works
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#807f78]">
            Booking your private hire journey takes less than three minutes with clear upfront details and immediate dispatch alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {howItWorksSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-2xl p-4 sm:p-7 relative flex flex-col justify-between hover:border-[#ff3b1d]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3b1d]/10 border border-[#ff3b1d]/20 flex items-center justify-center text-[#ff3b1d] font-display text-lg">
                    {item.step}
                  </div>
                  <span className="text-[10px] font-semibold text-[#807f78] px-2.5 py-0.5 bg-[#08080a] rounded-full border border-[rgba(243,241,234,0.08)]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-tight text-[#f3f1ea] mb-2 group-hover:text-[#ff3b1d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#807f78] leading-relaxed mb-4">
                  {item.description}
                </p>

                {idx === 0 && (
                  <div className="my-3 p-3 rounded-xl bg-[#08080a] border border-[rgba(243,241,234,0.08)] space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-[#f3f1ea]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">Mayfair, London W1</span>
                    </div>
                    <div className="h-2 border-l border-dashed border-[rgba(243,241,234,0.2)] ml-1" />
                    <div className="flex items-center gap-2 text-[11px] text-[#f3f1ea]">
                      <span className="w-2 h-2 rounded-full bg-[#ff3b1d] shrink-0" />
                      <span className="truncate">Heathrow Airport T5</span>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="my-3 p-3 rounded-xl bg-[#08080a] border border-[rgba(243,241,234,0.08)] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#f3f1ea]">Executive Saloon</div>
                      <div className="text-[10px] text-[#807f78]">Mercedes E-Class • 3 Pax</div>
                    </div>
                    <span className="font-display text-sm text-[#ff3b1d] bg-[#ff3b1d]/10 px-2.5 py-1 rounded-md border border-[#ff3b1d]/20">
                      £54.00
                    </span>
                  </div>
                )}

                {idx === 2 && (
                  <div className="my-3 p-3 rounded-xl bg-[#08080a] border border-[rgba(243,241,234,0.08)] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-left">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-[#f3f1ea]">Chauffeur Assigned</div>
                        <div className="text-[10px] text-[#807f78]">Live GPS Tracking Sent</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                      Active
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(243,241,234,0.08)] flex items-center gap-2 text-xs font-semibold text-[#ff3b1d]">
                <span>Step {item.step} of 03</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onBookNow}
            className="h-11 px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#ff3b1d]/20 transition-all inline-flex items-center gap-2 group"
          >
            <span>Book Your Ride Now</span>
            <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

import { airportHighlight } from '../../mockup/airports';
import { Eyebrow } from '../common/Eyebrow';
import { IconPlane, IconCheck, IconArrowRight, IconClock } from '../common/Icons';

export const AirportSection = ({ onBookAirportTransfer }) => {
  return (
    <section id="airport-transfers" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
        <div className="bg-[#111114] rounded-2xl sm:rounded-3xl p-3.5 sm:p-10 lg:p-12 border border-[rgba(243,241,234,0.1)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <Eyebrow label={airportHighlight.eyebrow} />

              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea] leading-[1.05]">
                {airportHighlight.headline}
              </h2>

              <p className="text-xs sm:text-sm text-[#807f78] leading-relaxed max-w-xl">
                {airportHighlight.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
                {airportHighlight.features.map((feat, idx) => (
                  <div key={idx} className="bg-[#08080a] p-3 sm:p-4 rounded-xl border border-[rgba(243,241,234,0.08)]">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f3f1ea] mb-1">
                      <IconCheck className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-[11px] text-[#807f78] leading-relaxed pl-5">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBookAirportTransfer}
                  className="w-full sm:w-auto h-11 px-5 sm:px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <IconPlane className="w-4 h-4 shrink-0" />
                  <span>{airportHighlight.ctaText}</span>
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#08080a] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[rgba(243,241,234,0.08)]">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(243,241,234,0.08)]">
                  <h3 className="font-display text-sm uppercase tracking-wider text-[#f3f1ea] flex items-center gap-2">
                    <IconClock className="w-3.5 h-3.5 text-[#ff3b1d]" />
                    <span>UK Airports Served</span>
                  </h3>
                  <span className="text-[10px] text-[#ff3b1d] font-semibold bg-[#ff3b1d]/10 px-2 py-0.5 rounded-full">
                    Live Tracking
                  </span>
                </div>

                <div className="divide-y divide-[rgba(243,241,234,0.06)] mt-1">
                  {airportHighlight.airportsServed.map((airport, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#f3f1ea]">
                          {airport.name}
                        </div>
                        <div className="text-[11px] text-[#807f78]">
                          {airport.terminals}
                        </div>
                      </div>
                      <span className="font-display text-xs tracking-wider text-[#ff3b1d] bg-[#111114] px-2 py-0.5 rounded border border-[rgba(243,241,234,0.08)]">
                        {airport.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

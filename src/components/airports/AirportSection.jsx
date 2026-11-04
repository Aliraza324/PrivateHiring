import { airportHighlight } from '../../mockup/airports';
import { Eyebrow } from '../common/Eyebrow';
import { IconPlane, IconCheck, IconArrowRight, IconClock } from '../common/Icons';

export const AirportSection = ({ onBookAirportTransfer }) => {
  return (
    <section id="airport-transfers" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111114] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[rgba(243,241,234,0.1)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow label={airportHighlight.eyebrow} />

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#f3f1ea] leading-[0.95]">
                {airportHighlight.headline}
              </h2>

              <p className="text-sm sm:text-base text-[#807f78] leading-relaxed max-w-2xl">
                {airportHighlight.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {airportHighlight.features.map((feat, idx) => (
                  <div key={idx} className="bg-[#08080a] p-5 rounded-2xl border border-[rgba(243,241,234,0.1)]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#f3f1ea] mb-1">
                      <IconCheck className="w-4 h-4 text-[#ff3b1d] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-[#807f78] leading-relaxed pl-6">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookAirportTransfer}
                  className="px-8 py-4 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center gap-2.5 group"
                >
                  <IconPlane className="w-4 h-4" />
                  <span>{airportHighlight.ctaText}</span>
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#08080a] p-6 rounded-3xl border border-[rgba(243,241,234,0.1)]">
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(243,241,234,0.1)]">
                  <h3 className="font-display text-base uppercase tracking-wider text-[#f3f1ea] flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-[#ff3b1d]" />
                    <span>UK Airports Served</span>
                  </h3>
                  <span className="text-[11px] text-[#ff3b1d] font-semibold bg-[#ff3b1d]/10 px-2.5 py-0.5 rounded-full">
                    Live Tracking
                  </span>
                </div>

                <div className="divide-y divide-[rgba(243,241,234,0.08)] mt-2">
                  {airportHighlight.airportsServed.map((airport, idx) => (
                    <div key={idx} className="py-3.5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#f3f1ea]">
                          {airport.name}
                        </div>
                        <div className="text-xs text-[#807f78]">
                          {airport.terminals}
                        </div>
                      </div>
                      <span className="font-display text-sm tracking-wider text-[#ff3b1d] bg-[#111114] px-2.5 py-1 rounded border border-[rgba(243,241,234,0.1)]">
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

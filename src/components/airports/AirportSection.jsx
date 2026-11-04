import { airportHighlight } from '../../mockup/airports';
import { IconPlane, IconCheck, IconArrowRight, IconClock } from '../common/Icons';

export const AirportSection = ({ onBookAirportTransfer }) => {
  return (
    <section id="airport-transfers" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider rounded-full">
                <IconPlane className="w-3.5 h-3.5" />
                <span>{airportHighlight.eyebrow}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {airportHighlight.headline}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {airportHighlight.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {airportHighlight.features.map((feat, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                      <IconCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookAirportTransfer}
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2.5"
                >
                  <IconPlane className="w-4 h-4" />
                  <span>{airportHighlight.ctaText}</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800/80">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-amber-400" />
                    <span>UK Airports Served</span>
                  </h3>
                  <span className="text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-0.5 rounded-full">
                    Live Tracking
                  </span>
                </div>

                <div className="divide-y divide-slate-800/60 mt-2">
                  {airportHighlight.airportsServed.map((airport, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {airport.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {airport.terminals}
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
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


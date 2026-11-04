import { trustPillars, operatorCredentials } from '../../mockup/trust';
import { IconShield, IconCheck } from '../common/Icons';

export const TrustSection = () => {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-slate-950/70 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
            Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Discerning Passengers Choose Apex
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We operate in full compliance with UK Private Hire regulations, prioritizing passenger safety, punctuality, and complete billing transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 hover:border-amber-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-black text-amber-400">
                    {pillar.stat}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {pillar.statLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <IconCheck className="w-4 h-4" />
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <IconShield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Full Regulatory Compliance
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating strictly within UK private hire licensing frameworks with insured, DBS-vetted drivers and inspected vehicles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
              {operatorCredentials.map((cred, i) => (
                <div key={i} className="text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400">{cred.label}:</span>
                  <span className="font-semibold text-white">{cred.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


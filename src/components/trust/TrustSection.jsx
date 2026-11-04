import { trustPillars, operatorCredentials } from '../../mockup/trust';
import { Eyebrow } from '../common/Eyebrow';
import { IconShield, IconCheck } from '../common/Icons';

export const TrustSection = () => {
  return (
    <section id="trust" className="py-16 px-6 sm:px-10 lg:px-14 rounded-[2rem] bg-[#111114] border border-[rgba(243,241,234,0.1)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow label="Peace of Mind" className="mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea]">
            Why Discerning Passengers Choose Apex
          </h2>
          <p className="mt-3 text-sm text-[#807f78]">
            We operate in full compliance with UK Private Hire regulations, prioritizing passenger safety, punctuality, and complete billing transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-2xl p-6 hover:border-[#ff3b1d]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-display text-3xl text-[#ff3b1d]">
                    {pillar.stat}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#807f78] bg-[#111114] px-2.5 py-0.5 rounded-md border border-[rgba(243,241,234,0.08)]">
                    {pillar.statLabel}
                  </span>
                </div>

                <h3 className="font-display text-lg uppercase tracking-tight text-[#f3f1ea] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#807f78] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(243,241,234,0.08)] flex items-center gap-2 text-xs text-emerald-400">
                <IconCheck className="w-3.5 h-3.5" />
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#ff3b1d]/15 via-[#08080a] to-[#08080a] border border-[#ff3b1d]/30 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#ff3b1d]/20 text-[#ff3b1d] flex items-center justify-center mb-3">
                <IconShield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg uppercase tracking-tight text-[#f3f1ea] mb-2">
                Full Regulatory Compliance
              </h3>
              <p className="text-xs text-[#807f78] leading-relaxed">
                Operating strictly within UK private hire licensing frameworks with insured, DBS-vetted drivers and inspected vehicles.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[rgba(243,241,234,0.08)] space-y-1.5">
              {operatorCredentials.map((cred, i) => (
                <div key={i} className="text-[11px] text-[#f3f1ea] flex items-center justify-between">
                  <span className="text-[#807f78]">{cred.label}:</span>
                  <span className="font-semibold text-[#f3f1ea]">{cred.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

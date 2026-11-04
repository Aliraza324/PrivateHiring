import { trustPillars, operatorCredentials } from '../../mockup/trust';
import { Eyebrow } from '../common/Eyebrow';
import { IconShield, IconCheck } from '../common/Icons';

export const TrustSection = () => {
  return (
    <section id="trust" className="py-20 px-6 sm:px-10 lg:px-16 rounded-[2rem] bg-[#111114] border border-[rgba(243,241,234,0.1)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow label="Peace of Mind" className="mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#f3f1ea]">
            Why Discerning Passengers Choose Apex
          </h2>
          <p className="mt-4 text-base text-[#807f78]">
            We operate in full compliance with UK Private Hire regulations, prioritizing passenger safety, punctuality, and complete billing transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-3xl p-7 hover:border-[#ff3b1d]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-4xl text-[#ff3b1d]">
                    {pillar.stat}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#807f78] bg-[#111114] px-2.5 py-1 rounded-md border border-[rgba(243,241,234,0.1)]">
                    {pillar.statLabel}
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-tight text-[#f3f1ea] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#807f78] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(243,241,234,0.1)] flex items-center gap-2 text-xs text-emerald-400">
                <IconCheck className="w-4 h-4" />
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#ff3b1d]/15 via-[#08080a] to-[#08080a] border border-[#ff3b1d]/30 rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ff3b1d]/20 text-[#ff3b1d] flex items-center justify-center mb-4">
                <IconShield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-[#f3f1ea] mb-3">
                Full Regulatory Compliance
              </h3>
              <p className="text-xs text-[#807f78] leading-relaxed">
                Operating strictly within UK private hire licensing frameworks with insured, DBS-vetted drivers and inspected vehicles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(243,241,234,0.1)] space-y-2">
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

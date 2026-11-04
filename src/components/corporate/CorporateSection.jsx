import { useState } from 'react';
import { corporateContent } from '../../mockup/corporate';
import { CorporateModal } from './CorporateModal';
import { Eyebrow } from '../common/Eyebrow';
import { IconCheck, IconArrowRight } from '../common/Icons';

export const CorporateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="corporate-travel" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
        <div className="bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-2xl sm:rounded-3xl p-3.5 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <Eyebrow label={corporateContent.eyebrow} />

              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea] leading-[1.05]">
                {corporateContent.headline}
              </h2>

              <p className="text-xs sm:text-sm text-[#807f78] leading-relaxed">
                {corporateContent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                {corporateContent.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-[#08080a] p-3 sm:p-4 rounded-xl border border-[rgba(243,241,234,0.08)]">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f3f1ea] mb-1">
                      <IconCheck className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
                      <span>{benefit.title}</span>
                    </div>
                    <p className="text-[11px] text-[#807f78] leading-relaxed pl-5">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto h-11 px-5 sm:px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>{corporateContent.ctaText}</span>
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <span className="text-[11px] text-[#807f78]">
                  Dedicated corporate portal integrates with central dispatch.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[rgba(243,241,234,0.1)] group">
                <img
                  src={corporateContent.image}
                  alt="Executive Corporate Private Hire"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#08080a]/80 backdrop-blur-md rounded-full border border-[rgba(243,241,234,0.15)] text-[11px] font-display uppercase tracking-wider text-[#ff3b1d]">
                    VIP Business Fleet
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 rounded-full text-[10px] font-semibold">
                    Priority Dispatch
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#08080a]/85 backdrop-blur-md border border-[rgba(243,241,234,0.12)] p-3 rounded-xl space-y-1.5">
                  <div className="text-xs font-semibold text-[#f3f1ea] flex items-center justify-between">
                    <span>Corporate Invoicing Terms</span>
                    <span className="text-[#ff3b1d] font-display uppercase">30-Day Net</span>
                  </div>
                  <div className="text-[11px] text-[#807f78]">
                    Dedicated UK account controller & itemised monthly VAT billing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CorporateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

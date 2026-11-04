import { useState } from 'react';
import { corporateContent } from '../../mockup/corporate';
import { CorporateModal } from './CorporateModal';
import { Eyebrow } from '../common/Eyebrow';
import { IconCheck, IconArrowRight } from '../common/Icons';

export const CorporateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="corporate-travel" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <Eyebrow label={corporateContent.eyebrow} />

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea] leading-[1.05]">
              {corporateContent.headline}
            </h2>

            <p className="text-xs sm:text-sm text-[#807f78] leading-relaxed">
              {corporateContent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corporateContent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#08080a] p-4 rounded-xl border border-[rgba(243,241,234,0.08)]">
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

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="h-11 px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center gap-2 group"
              >
                <span>{corporateContent.ctaText}</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[11px] text-[#807f78]">
                Note: Client presentation concept. Dedicated corporate portal integrates with central dispatch.
              </span>
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

import { useState } from 'react';
import { corporateContent } from '../../mockup/corporate';
import { CorporateModal } from './CorporateModal';
import { Eyebrow } from '../common/Eyebrow';
import { IconCheck, IconArrowRight } from '../common/Icons';

export const CorporateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="corporate-travel" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <Eyebrow label={corporateContent.eyebrow} />

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#f3f1ea] leading-[0.95]">
              {corporateContent.headline}
            </h2>

            <p className="text-base text-[#807f78] leading-relaxed">
              {corporateContent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {corporateContent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#08080a] p-5 rounded-2xl border border-[rgba(243,241,234,0.1)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#f3f1ea] mb-1.5">
                    <IconCheck className="w-4 h-4 text-[#ff3b1d] shrink-0" />
                    <span>{benefit.title}</span>
                  </div>
                  <p className="text-xs text-[#807f78] leading-relaxed pl-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center gap-2 group"
              >
                <span>{corporateContent.ctaText}</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-[#807f78]">
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

import { useState } from 'react';
import { corporateContent } from '../../mockup/corporate';
import { CorporateModal } from './CorporateModal';
import { IconBuilding, IconCheck, IconArrowRight } from '../common/Icons';

export const CorporateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="corporate-travel" className="py-20 lg:py-28 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider rounded-full">
              <IconBuilding className="w-3.5 h-3.5" />
              <span>{corporateContent.eyebrow}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {corporateContent.headline}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {corporateContent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {corporateContent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
                    <IconCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{benefit.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>{corporateContent.ctaText}</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400">
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


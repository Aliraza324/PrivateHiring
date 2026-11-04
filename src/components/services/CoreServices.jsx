import { Link } from 'react-router';
import { coreServices } from '../../mockup/services';
import { Eyebrow } from '../common/Eyebrow';
import { IconCheck, IconArrowRight } from '../common/Icons';

export const CoreServices = () => {
  const handleScroll = (path) => {
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-3.5 sm:px-10 lg:px-14 rounded-2xl sm:rounded-[2rem] bg-[#111114] border border-[rgba(243,241,234,0.1)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <Eyebrow label="What We Do" className="mb-2" />
          <h2 className="font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#f3f1ea]">
            Specialist Private Hire & Transport Services
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#807f78]">
            Tailored journeys backed by licensed chauffeurs, modern clean vehicles, and 24/7 dedicated telephone dispatch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-2xl p-4 sm:p-7 hover:border-[#ff3b1d]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-2xl font-normal text-[#ff3b1d]">
                    {service.number}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#111114] flex items-center justify-center text-[#807f78] group-hover:text-[#ff3b1d] group-hover:bg-[#ff3b1d]/10 transition-colors">
                    <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-tight text-[#f3f1ea] mb-2 group-hover:text-[#ff3b1d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#807f78] leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                <div className="space-y-1.5 pt-3.5 border-t border-[rgba(243,241,234,0.08)]">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#f3f1ea]">
                      <IconCheck className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3">
                <Link
                  to={service.href}
                  onClick={() => handleScroll(service.href)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff3b1d] hover:text-[#ff6a3d] transition-colors group/link"
                >
                  <span>Book This Service</span>
                  <IconArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

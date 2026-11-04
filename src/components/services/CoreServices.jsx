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
    <section className="py-20 px-6 sm:px-10 lg:px-16 rounded-[2rem] bg-[#111114] border border-[rgba(243,241,234,0.1)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <Eyebrow label="What We Do" className="mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#f3f1ea]">
            Specialist Private Hire & Transport Services
          </h2>
          <p className="mt-4 text-base text-[#807f78]">
            Tailored journeys backed by licensed chauffeurs, modern clean vehicles, and 24/7 dedicated telephone dispatch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-3xl p-8 hover:border-[#ff3b1d]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-normal text-[#ff3b1d]">
                    {service.number}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#111114] flex items-center justify-center text-[#807f78] group-hover:text-[#ff3b1d] group-hover:bg-[#ff3b1d]/10 transition-colors">
                    <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-tight text-[#f3f1ea] mb-2 group-hover:text-[#ff3b1d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#807f78] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 pt-4 border-t border-[rgba(243,241,234,0.1)]">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#f3f1ea]">
                      <IconCheck className="w-4 h-4 text-[#ff3b1d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to={service.href}
                  onClick={() => handleScroll(service.href)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff3b1d] hover:text-[#ff6a3d] transition-colors group/link"
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

import { Link } from 'react-router';
import { coreServices } from '../../mockup/services';
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
    <section className="py-20 bg-slate-950/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3.5 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialist Private Hire & Transport Services
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Tailored journeys backed by licensed chauffeurs, modern clean vehicles, and 24/7 dedicated telephone dispatch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all flex flex-col justify-between group hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-400/60 font-mono">
                    {service.number}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors">
                    <IconArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <IconCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to={service.href}
                  onClick={() => handleScroll(service.href)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Book This Service</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Link } from 'react-router';
import { brandData } from '../../mockup/navigation';
import { finalCtaContent, footerData } from '../../mockup/footer';
import { IconCar, IconPhone, IconShield, IconArrowRight } from '../common/Icons';

export const Footer = ({ onOpenBooking }) => {
  const handleScroll = (path) => {
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 rounded-3xl p-8 sm:p-12 border border-slate-800 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              {finalCtaContent.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {finalCtaContent.headline}
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl">
              {finalCtaContent.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  if (onOpenBooking) onOpenBooking();
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>{finalCtaContent.primaryCta}</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <IconPhone className="w-4 h-4 text-amber-400" />
                <span>{finalCtaContent.secondaryCta}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950">
                <IconCar className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold tracking-tight text-white">
                <span>APEX</span> <span className="text-amber-400">PRIVATE HIRE</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premium UK passenger transport, executive chauffeur services, and guaranteed airport connections across London, the South East, and major UK cities.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>{footerData.companyNumber}</div>
              <div className="text-amber-400/90 flex items-center gap-1.5 font-medium">
                <IconShield className="w-3.5 h-3.5" />
                <span>{footerData.licensingNotice}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerData.serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => handleScroll(item.path)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerData.companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => handleScroll(item.path)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Contact Dispatch
            </h4>
            <div className="text-sm space-y-3 text-slate-400">
              <div>
                <span className="block text-xs text-slate-500 uppercase">24/7 UK Phone</span>
                <span className="font-semibold text-white">{brandData.phone}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase">Bookings Email</span>
                <span className="text-slate-300">{brandData.email}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase">Operating Hours</span>
                <span className="text-slate-300">{footerData.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {footerData.legalLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => handleScroll(item.path)}
                className="hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


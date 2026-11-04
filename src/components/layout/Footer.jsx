import { Link } from 'react-router';
import { brandData } from '../../mockup/navigation';
import { finalCtaContent, footerData } from '../../mockup/footer';
import { Eyebrow } from '../common/Eyebrow';
import { IconShield, IconArrowRight, IconPhone } from '../common/Icons';

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
    <footer id="contact" className="bg-[#08080a] text-[#807f78] pt-10 sm:pt-14 pb-8 sm:pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
        <div className="bg-[#111114] rounded-2xl sm:rounded-3xl p-3.5 sm:p-10 lg:p-12 border border-[rgba(243,241,234,0.1)] mb-10 sm:mb-14 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <Eyebrow label={finalCtaContent.eyebrow} className="mb-2 sm:mb-3" />
            <h2 className="font-display text-xl sm:text-3xl lg:text-5xl uppercase tracking-tight text-[#f3f1ea] leading-[1.05]">
              {finalCtaContent.headline}
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#807f78]">
              {finalCtaContent.subtext}
            </p>
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full sm:w-auto h-11 px-5 sm:px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#ff3b1d]/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>{finalCtaContent.primaryCta}</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto h-11 px-5 sm:px-6 bg-[#17171b] hover:bg-[#202026] text-[#f3f1ea] font-medium text-xs rounded-full border border-[rgba(243,241,234,0.1)] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <IconPhone className="w-4 h-4 text-[#ff3b1d] shrink-0" />
                <span>{finalCtaContent.secondaryCta}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[rgba(243,241,234,0.1)]">
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#111114] border border-[rgba(243,241,234,0.2)] p-0.5">
                <img
                  src="/logo.png"
                  alt="Apex Private Hire Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="font-display text-lg uppercase tracking-tight text-[#f3f1ea]">
                <span>APEX</span> <span className="text-[#ff3b1d]">PRIVATE HIRE</span>
              </div>
            </Link>
            <p className="text-xs text-[#807f78] leading-relaxed max-w-sm">
              Premium UK passenger transport, executive chauffeur services, and guaranteed airport connections across London, the South East, and major UK cities.
            </p>
            <div className="pt-1 text-[11px] text-[#807f78] space-y-1">
              <div>{footerData.companyNumber}</div>
              <div className="text-[#ff3b1d] flex items-center gap-1.5 font-medium">
                <IconShield className="w-3.5 h-3.5" />
                <span>{footerData.licensingNotice}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3f1ea] mb-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {footerData.serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => handleScroll(item.path)}
                    className="text-[#807f78] hover:text-[#ff3b1d] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3f1ea] mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              {footerData.companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => handleScroll(item.path)}
                    className="text-[#807f78] hover:text-[#ff3b1d] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3f1ea] mb-3">
              Contact Dispatch
            </h4>
            <div className="text-xs space-y-2.5 text-[#807f78]">
              <div>
                <span className="block text-[10px] text-[#807f78] uppercase tracking-[0.18em]">24/7 UK Phone</span>
                <span className="font-semibold text-[#f3f1ea]">{brandData.phone}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#807f78] uppercase tracking-[0.18em]">Bookings Email</span>
                <span className="text-[#f3f1ea]">{brandData.email}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#807f78] uppercase tracking-[0.18em]">Operating Hours</span>
                <span className="text-[#807f78]">{footerData.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#807f78]">
          <div className="font-display tracking-wide uppercase text-[11px]">
            &copy; {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs">
            {footerData.legalLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => handleScroll(item.path)}
                className="hover:text-[#ff3b1d] transition-colors"
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

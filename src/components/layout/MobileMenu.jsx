import { Link } from 'react-router';
import { brandData, navLinks } from '../../mockup/navigation';
import { IconClose, IconPhone } from '../common/Icons';

export const MobileMenu = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  const handleLinkClick = (hash) => {
    onClose();
    if (hash.startsWith('/#')) {
      const element = document.querySelector(hash.replace('/', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#08080a] p-6 sm:p-10 overflow-y-auto">
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(243,241,234,0.1)]">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
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
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 text-[#807f78] hover:text-[#f3f1ea] rounded-full border border-[rgba(243,241,234,0.1)]"
            aria-label="Close menu"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 mt-12">
          {navLinks.map((link, idx) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#f3f1ea] hover:text-[#ff3b1d] transition-colors"
              style={{
                animation: `fadeInUp 0.42s ease-out forwards ${120 + idx * 70}ms`
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pt-8 border-t border-[rgba(243,241,234,0.1)] flex flex-col gap-4 mt-12">
        <div className="flex items-center gap-3 text-sm text-[#807f78] bg-[#111114] p-4 rounded-2xl border border-[rgba(243,241,234,0.1)]">
          <IconPhone className="w-4 h-4 text-[#ff3b1d] shrink-0" />
          <div>
            <div className="text-[11px] text-[#807f78] uppercase tracking-[0.18em]">24/7 UK Dispatch</div>
            <div className="font-semibold text-[#f3f1ea]">{brandData.phone}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            const element = document.getElementById('booking');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            if (onOpenBooking) onOpenBooking();
          }}
          className="w-full py-4 text-center font-display text-sm uppercase tracking-wider text-[#08080a] bg-[#ff3b1d] rounded-full shadow-lg shadow-[#ff3b1d]/20"
        >
          Book Now
        </button>

        <p className="text-[11px] text-center text-[#807f78]">
          {brandData.license}
        </p>
      </div>
    </div>
  );
};

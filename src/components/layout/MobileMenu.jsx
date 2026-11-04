import { Link } from 'react-router';
import { brandData, navLinks } from '../../mockup/navigation';
import { IconCar, IconClose, IconPhone } from '../common/Icons';

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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-slate-950/95 backdrop-blur-xl p-6 overflow-y-auto">
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950">
              <IconCar className="w-5 h-5" />
            </div>
            <div className="text-base font-bold tracking-tight text-white">
              <span>APEX</span> <span className="text-amber-400">PRIVATE HIRE</span>
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Close menu"
          >
            <IconClose className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className="px-4 py-3 text-lg font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pt-8 border-t border-slate-800/80 flex flex-col gap-4 mt-8">
        <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
          <IconPhone className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div>
            <div className="text-xs text-slate-400 font-medium">24/7 Dispatch Control</div>
            <div className="font-semibold text-white">{brandData.phone}</div>
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
          className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20"
        >
          Book Now
        </button>

        <p className="text-[11px] text-center text-slate-500">
          {brandData.license}
        </p>
      </div>
    </div>
  );
};


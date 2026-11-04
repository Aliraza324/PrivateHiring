import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { brandData, navLinks } from '../../mockup/navigation';
import { IconCar, IconPhone } from '../common/Icons';

export const Navbar = ({ onOpenBooking, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (hash) => {
    if (hash.startsWith('/#')) {
      const element = document.querySelector(hash.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
              <IconCar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>APEX</span>
                <span className="text-amber-400 font-medium">PRIVATE HIRE</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
                UK Executive Transport
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => scrollToSection(link.path)}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                if (onOpenBooking) onOpenBooking();
              }}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 px-3.5 py-2 rounded-full transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-amber-400" />
              <span>{brandData.displayPhone}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                if (onOpenBooking) onOpenBooking();
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-xl"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


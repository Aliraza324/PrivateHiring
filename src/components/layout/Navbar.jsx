import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { brandData, navLinks } from '../../mockup/navigation';
import { IconPhone } from '../common/Icons';

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
      isScrolled ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-[rgba(243,241,234,0.1)] py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#111114] border border-[rgba(243,241,234,0.2)] p-0.5 group-hover:border-[#ff3b1d] group-hover:shadow-lg group-hover:shadow-[#ff3b1d]/20 transition-all duration-300">
              <img
                src="/logo.png"
                alt="Apex Private Hire Logo"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="font-display text-lg uppercase tracking-tight text-[#f3f1ea] flex items-center gap-1.5 leading-none">
                <span>APEX</span>
                <span className="text-[#ff3b1d]">PRIVATE HIRE</span>
              </div>
              <p className="text-[10px] text-[#807f78] uppercase tracking-[0.22em] mt-1 hidden sm:block">
                UK Executive Transport
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => scrollToSection(link.path)}
                className="relative py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#807f78] hover:text-[#f3f1ea] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-[1px] bg-[#ff3b1d] w-0 group-hover:w-full transition-all duration-300" />
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
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#807f78] hover:text-[#f3f1ea] border border-[rgba(243,241,234,0.1)] hover:border-[rgba(243,241,234,0.25)] px-4 py-2.5 rounded-full transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-[#ff3b1d]" />
              <span>{brandData.displayPhone}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                if (onOpenBooking) onOpenBooking();
              }}
              className="px-6 py-2.5 font-display text-xs uppercase tracking-wider text-[#08080a] bg-[#ff3b1d] hover:bg-[#ff6a3d] rounded-full shadow-lg shadow-[#ff3b1d]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-[#807f78] hover:text-[#f3f1ea] border border-[rgba(243,241,234,0.1)] rounded-full"
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

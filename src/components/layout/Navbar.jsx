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
      isScrolled ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-[rgba(243,241,234,0.1)] py-2.5 sm:py-3 shadow-2xl' : 'bg-transparent py-3 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <Link to="/" className="flex items-center group shrink-0" aria-label="Apex Private Hire Home">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#111114] border border-[rgba(243,241,234,0.2)] p-0.5 group-hover:border-[#ff3b1d] group-hover:shadow-lg group-hover:shadow-[#ff3b1d]/20 transition-all duration-300">
              <img
                src="/logo.png"
                alt="Apex Private Hire Logo"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => scrollToSection(link.path)}
                className="relative py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#fff] hover:text-[#f3f1ea] transition-colors group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-[1px] bg-[#ff3b1d] w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                if (onOpenBooking) onOpenBooking();
              }}
              className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full border border-[rgba(243,241,234,0.15)] hover:border-[rgba(243,241,234,0.3)] bg-[#111114] text-[#f3f1ea] hover:text-white transition-all text-xs font-semibold whitespace-nowrap shrink-0"
            >
              <IconPhone className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
              <span>{brandData.displayPhone}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                if (onOpenBooking) onOpenBooking();
              }}
              className="inline-flex items-center justify-center h-9 sm:h-10 px-3.5 sm:px-5 rounded-full bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-[11px] sm:text-xs uppercase tracking-wider shadow-lg shadow-[#ff3b1d]/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-1.5 sm:p-2 text-[#807f78] hover:text-[#f3f1ea] border border-[rgba(243,241,234,0.1)] rounded-full shrink-0"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

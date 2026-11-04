import { useState } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { IntroLoader } from '../components/common/IntroLoader';
import { useAdaptiveScale } from '../hooks/useAdaptiveScale';
import { useLenis } from '../hooks/useLenis';

export const MainLayout = () => {
  const [isLoaderReady, setIsLoaderReady] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useAdaptiveScale();
  useLenis(!isLoaderReady || isMobileMenuOpen);

  const handleOpenBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f3f1ea] flex flex-col font-sans selection:bg-[#ff3b1d] selection:text-[#08080a]">
      <IntroLoader onReady={() => setIsLoaderReady(true)} />

      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <main className="w-full overflow-x-clip p-2 sm:p-3 flex flex-col gap-3 flex-1">
        <Outlet context={{ isReady: isLoaderReady, onOpenBooking: handleOpenBooking }} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
};

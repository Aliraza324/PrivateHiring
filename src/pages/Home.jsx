import { useState } from 'react';
import { Hero } from '../components/hero/Hero';
import { BookingWidget } from '../components/booking/BookingWidget';
import { FleetSection } from '../components/fleet/FleetSection';
import { CoreServices } from '../components/services/CoreServices';
import { HowItWorks } from '../components/howItWorks/HowItWorks';
import { TrustSection } from '../components/trust/TrustSection';
import { AirportSection } from '../components/airports/AirportSection';
import { CorporateSection } from '../components/corporate/CorporateSection';

export const Home = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState('standard');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    scrollToBooking();
  };

  const handleBookAirport = () => {
    scrollToBooking();
  };

  return (
    <div className="space-y-4">
      <Hero
        onGetFareEstimate={scrollToBooking}
        onExploreServices={() => {
          const el = document.getElementById('our-fleet');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <BookingWidget
        selectedVehicleId={selectedVehicleId}
        onSelectVehicleInWidget={setSelectedVehicleId}
      />

      <FleetSection onSelectVehicle={handleSelectVehicle} />

      <CoreServices />

      <HowItWorks onBookNow={scrollToBooking} />

      <TrustSection />

      <AirportSection onBookAirportTransfer={handleBookAirport} />

      <CorporateSection />
    </div>
  );
};


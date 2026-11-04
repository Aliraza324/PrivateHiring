import { fleetVehicles } from '../../mockup/fleet';
import { FleetCard } from './FleetCard';
import { Eyebrow } from '../common/Eyebrow';

export const FleetSection = ({ onSelectVehicle }) => {
  const handleSelect = (vehicleId) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicleId);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="our-fleet" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow label="Our Vehicle Categories" className="mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#f3f1ea]">
            Maintained to Impeccable Standards
          </h2>
          <p className="mt-4 text-base text-[#807f78]">
            From everyday saloons to executive chauffeur cars, spacious multi-passenger vans, and certified accessible vehicles, our fleet is ready for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((vehicle) => (
            <FleetCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#807f78]">
          <span>*Vehicle models shown are representative examples. Exact vehicle allocation is subject to availability and dispatch confirmation.</span>
        </div>
      </div>
    </section>
  );
};

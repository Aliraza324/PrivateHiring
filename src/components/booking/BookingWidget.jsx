import { useState } from 'react';
import { BookingTabs } from './BookingTabs';
import { BookingExtraFields } from './BookingExtraFields';
import { BookingEstimateModal } from './BookingEstimateModal';
import { vehicleCategories, ukAirports, sampleAddresses } from '../../mockup/booking';
import { IconMapPin, IconClock, IconUsers, IconCar, IconArrowRight } from '../common/Icons';

export const BookingWidget = ({ selectedVehicleId }) => {
  const [activeTab, setActiveTab] = useState('one-way');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [passengers, setPassengers] = useState('1-2');
  const [selectedVehicle, setSelectedVehicle] = useState(selectedVehicleId || 'standard');
  const [showEstimateModal, setShowEstimateModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEstimateModal(true);
  };

  const currentVehicleObj = vehicleCategories.find((v) => v.id === selectedVehicle) || vehicleCategories[0];

  return (
    <div id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
      <div className="bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden">
        <BookingTabs activeTab={activeTab} onSelectTab={setActiveTab} />

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pickup Address / Postcode</span>
              </label>
              <input
                type="text"
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. 10 Downing Street or Heathrow T5"
                list="pickup-suggestions"
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-4 py-3 text-sm text-[#f3f1ea] placeholder-[#807f78] focus:outline-none focus:border-[#ff3b1d]"
              />
              <datalist id="pickup-suggestions">
                {sampleAddresses.map((addr, i) => (
                  <option key={i} value={addr} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Destination Address / Airport</span>
              </label>
              {activeTab === 'airport' ? (
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-4 py-3 text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
                >
                  <option value="">Select Target UK Airport...</option>
                  {ukAirports.map((airport, i) => (
                    <option key={i} value={airport}>{airport}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Gatwick South Terminal or Birmingham"
                  list="dest-suggestions"
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-4 py-3 text-sm text-[#f3f1ea] placeholder-[#807f78] focus:outline-none focus:border-[#ff3b1d]"
                />
              )}
              <datalist id="dest-suggestions">
                {sampleAddresses.map((addr, i) => (
                  <option key={i} value={addr} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Pickup Date</span>
              </label>
              <input
                type="date"
                required
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5">
                Pickup Time
              </label>
              <input
                type="time"
                required
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconUsers className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Passengers</span>
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
              >
                <option value="1-2">1 - 2 Passengers</option>
                <option value="3-4">3 - 4 Passengers</option>
                <option value="5-8">5 - 8 Passengers (MPV)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconCar className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Vehicle Tier</span>
              </label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
              >
                {vehicleCategories.map((v) => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>
          </div>

          <BookingExtraFields
            activeTab={activeTab}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            returnTime={returnTime}
            setReturnTime={setReturnTime}
            flightNumber={flightNumber}
            setFlightNumber={setFlightNumber}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-[#807f78] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Instant quote calculation • Guest checkout supported</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Availability / Get Fare</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>

      <BookingEstimateModal
        isOpen={showEstimateModal}
        onClose={() => setShowEstimateModal(false)}
        bookingDetails={{
          journeyType: activeTab,
          pickup,
          destination,
          pickupDate,
          pickupTime,
          vehicleName: currentVehicleObj.name
        }}
      />
    </div>
  );
};

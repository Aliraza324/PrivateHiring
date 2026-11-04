import { useState } from 'react';
import { BookingTabs } from './BookingTabs';
import { BookingExtraFields } from './BookingExtraFields';
import { BookingEstimateModal } from './BookingEstimateModal';
import { CustomSelect } from '../common/CustomSelect';
import { AddressInput } from '../common/AddressInput';
import { vehicleCategories, ukAirports, sampleAddresses, sampleDates, sampleTimes } from '../../mockup/booking';
import { IconMapPin, IconClock, IconUsers, IconCar, IconArrowRight } from '../common/Icons';

export const BookingWidget = ({ selectedVehicleId }) => {
  const [activeTab, setActiveTab] = useState('one-way');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState(sampleDates[0]);
  const [pickupTime, setPickupTime] = useState(sampleTimes[0]);
  const [returnDate, setReturnDate] = useState(sampleDates[1]);
  const [returnTime, setReturnTime] = useState(sampleTimes[5]);
  const [flightNumber, setFlightNumber] = useState('');
  const [passengers, setPassengers] = useState('1-2');
  const [selectedVehicle, setSelectedVehicle] = useState(selectedVehicleId || 'standard');
  const [showEstimateModal, setShowEstimateModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEstimateModal(true);
  };

  const passengerOptions = [
    { value: '1-2', label: '1 - 2 Passengers' },
    { value: '3-4', label: '3 - 4 Passengers' },
    { value: '5-8', label: '5 - 8 Passengers (MPV)' }
  ];

  const vehicleOptions = vehicleCategories.map((v) => ({
    value: v.id,
    label: v.name
  }));

  const currentVehicleObj = vehicleCategories.find((v) => v.id === selectedVehicle) || vehicleCategories[0];

  return (
    <div id="booking" className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8 mt-5 sm:-mt-10 relative z-20">
      <div className="bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden">
        <BookingTabs activeTab={activeTab} onSelectTab={setActiveTab} />

        <form onSubmit={handleSubmit} className="p-3.5 sm:p-8 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pickup Address / Postcode</span>
              </label>
              <AddressInput
                required
                value={pickup}
                onChange={setPickup}
                placeholder="e.g. 10 Downing Street or Central London"
                suggestions={sampleAddresses}
                iconColor="text-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Destination Address / Airport</span>
              </label>
              {activeTab === 'airport' ? (
                <CustomSelect
                  value={destination}
                  onChange={setDestination}
                  placeholder="Select Target UK Airport..."
                  options={ukAirports}
                />
              ) : (
                <AddressInput
                  required
                  value={destination}
                  onChange={setDestination}
                  placeholder="e.g. Gatwick South Terminal or Heathrow"
                  suggestions={sampleAddresses}
                  iconColor="text-[#ff3b1d]"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Pickup Date</span>
              </label>
              <CustomSelect
                value={pickupDate}
                onChange={setPickupDate}
                options={sampleDates}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Pickup Time</span>
              </label>
              <CustomSelect
                value={pickupTime}
                onChange={setPickupTime}
                options={sampleTimes}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconUsers className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Passengers</span>
              </label>
              <CustomSelect
                value={passengers}
                onChange={setPassengers}
                options={passengerOptions}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#807f78] mb-1.5 flex items-center gap-1.5">
                <IconCar className="w-3.5 h-3.5 text-[#ff3b1d]" />
                <span>Vehicle Tier</span>
              </label>
              <CustomSelect
                value={selectedVehicle}
                onChange={setSelectedVehicle}
                options={vehicleOptions}
                align="right"
              />
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
              className="w-full sm:w-auto h-11 px-4 sm:px-7 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-[11px] sm:text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-[#ff3b1d]/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>Check Availability / Get Fare</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
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

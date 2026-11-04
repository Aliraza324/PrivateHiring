import { CustomSelect } from '../common/CustomSelect';
import { sampleDates, sampleTimes } from '../../mockup/booking';
import { IconPlane, IconClock } from '../common/Icons';

export const BookingExtraFields = ({
  activeTab,
  returnDate,
  setReturnDate,
  returnTime,
  setReturnTime,
  flightNumber,
  setFlightNumber
}) => {
  if (activeTab === 'return') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#08080a] border border-[rgba(243,241,234,0.1)]">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#ff3b1d] mb-1.5 flex items-center gap-1.5">
            <IconClock className="w-3.5 h-3.5" />
            <span>Return Journey Date</span>
          </label>
          <CustomSelect
            value={returnDate}
            onChange={setReturnDate}
            placeholder="Select Return Date..."
            options={sampleDates}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#ff3b1d] mb-1.5 flex items-center gap-1.5">
            <IconClock className="w-3.5 h-3.5" />
            <span>Return Pickup Time</span>
          </label>
          <CustomSelect
            value={returnTime}
            onChange={setReturnTime}
            placeholder="Select Return Time..."
            options={sampleTimes}
            align="right"
          />
        </div>
      </div>
    );
  }

  if (activeTab === 'airport') {
    return (
      <div className="p-4 rounded-2xl bg-[#08080a] border border-[rgba(243,241,234,0.1)]">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#ff3b1d] mb-1.5 flex items-center gap-1.5">
          <IconPlane className="w-3.5 h-3.5" />
          <span>Inbound Flight Number (Optional)</span>
        </label>
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          placeholder="e.g. BA 1478 or EK 003"
          className="w-full bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
        />
      </div>
    );
  }

  return null;
};

import { IconPlane } from '../common/Icons';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
            Return Journey Date
          </label>
          <input
            type="date"
            required
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
            Return Pickup Time
          </label>
          <input
            type="time"
            required
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>
    );
  }

  if (activeTab === 'airport') {
    return (
      <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
        <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
          <IconPlane className="w-3.5 h-3.5" />
          <span>Inbound Flight Number (Optional)</span>
        </label>
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          placeholder="e.g. BA 1478 or EK 003"
          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
        />
      </div>
    );
  }

  return null;
};


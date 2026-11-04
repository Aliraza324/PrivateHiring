import { IconClose, IconCheck, IconCar, IconShield, IconClock } from '../common/Icons';

export const BookingEstimateModal = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-md">
              Illustrative Demo
            </span>
            <span className="text-xs text-slate-400">Prototype Fare Preview</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Journey Overview ({bookingDetails.journeyType.toUpperCase()})
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Pickup</div>
                <div className="text-sm font-semibold text-white">
                  {bookingDetails.pickup || 'Central London, W1'}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Destination</div>
                <div className="text-sm font-semibold text-white">
                  {bookingDetails.destination || 'Heathrow Terminal 5 (LHR)'}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Date & Time</span>
              <span className="font-semibold text-white">
                {bookingDetails.pickupDate || 'Today'} • {bookingDetails.pickupTime || 'Immediate'}
              </span>
            </div>
            <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Vehicle Tier</span>
              <span className="font-semibold text-amber-400">
                {bookingDetails.vehicleName}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-950/20 to-slate-950 p-5 rounded-2xl border border-amber-500/20 text-center">
            <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
              Sample Estimated Fare
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              £48.00 - £56.00*
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              *Illustrative demo estimate based on approx 18.5 miles. Actual live fare will be calculated via the central dispatch platform upon live integration.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Includes 60 mins airport wait time (if airport transfer)</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full flight tracking & meet and greet optional</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Guest reservation option enabled (no prior account needed)</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Confirm Journey Details
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
          >
            Edit Inputs
          </button>
        </div>
      </div>
    </div>
  );
};


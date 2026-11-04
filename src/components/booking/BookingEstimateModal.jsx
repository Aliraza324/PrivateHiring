import { IconClose, IconCheck } from '../common/Icons';

export const BookingEstimateModal = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080a]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#f3f1ea] my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(243,241,234,0.1)]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#ff3b1d]/10 text-[#ff3b1d] border border-[#ff3b1d]/30 rounded-md">
              Illustrative Demo
            </span>
            <span className="text-xs text-[#807f78]">Prototype Fare Preview</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#807f78] hover:text-[#f3f1ea] rounded-lg hover:bg-[#17171b] transition-colors"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="bg-[#08080a] p-4 rounded-2xl border border-[rgba(243,241,234,0.1)] space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#807f78] font-semibold">
              Journey Overview ({bookingDetails.journeyType.toUpperCase()})
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <div>
                <div className="text-xs text-[#807f78] font-medium">Pickup</div>
                <div className="text-sm font-semibold text-[#f3f1ea]">
                  {bookingDetails.pickup || 'Central London, W1'}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff3b1d] mt-1.5 shrink-0" />
              <div>
                <div className="text-xs text-[#807f78] font-medium">Destination</div>
                <div className="text-sm font-semibold text-[#f3f1ea]">
                  {bookingDetails.destination || 'Heathrow Terminal 5 (LHR)'}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-[#08080a] p-3 rounded-xl border border-[rgba(243,241,234,0.1)]">
              <span className="text-[#807f78] block mb-1">Date & Time</span>
              <span className="font-semibold text-[#f3f1ea]">
                {bookingDetails.pickupDate || 'Today'} • {bookingDetails.pickupTime || 'Immediate'}
              </span>
            </div>
            <div className="bg-[#08080a] p-3 rounded-xl border border-[rgba(243,241,234,0.1)]">
              <span className="text-[#807f78] block mb-1">Vehicle Tier</span>
              <span className="font-semibold text-[#ff3b1d]">
                {bookingDetails.vehicleName}
              </span>
            </div>
          </div>

          <div className="bg-[#17171b] p-5 rounded-2xl border border-[#ff3b1d]/20 text-center">
            <div className="text-xs text-[#ff3b1d] font-semibold uppercase tracking-wider mb-1">
              Sample Estimated Fare
            </div>
            <div className="font-display text-4xl sm:text-5xl text-[#f3f1ea] tracking-tight">
              £48.00 - £56.00*
            </div>
            <p className="text-[11px] text-[#807f78] mt-2">
              *Illustrative demo estimate based on approx 18.5 miles. Actual live fare will be calculated via the central dispatch platform upon live integration.
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#807f78] pt-2">
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 60 mins airport wait time (if airport transfer)</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full flight tracking & meet and greet optional</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Guest reservation option enabled (no prior account needed)</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[rgba(243,241,234,0.1)] flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3.5 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Confirm Journey Details
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-5 bg-[#17171b] hover:bg-[#202026] text-[#807f78] hover:text-[#f3f1ea] text-xs font-semibold rounded-xl transition-colors"
          >
            Edit Inputs
          </button>
        </div>
      </div>
    </div>
  );
};

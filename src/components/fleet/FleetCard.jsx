import { IconUsers, IconLuggage, IconCheck, IconWheelchair, IconArrowRight } from '../common/Icons';

export const FleetCard = ({ vehicle, onSelect }) => {
  return (
    <div className="bg-[#111114] border border-[rgba(243,241,234,0.1)] rounded-3xl overflow-hidden hover:border-[#ff3b1d]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff3b1d]/5">
      <div>
        <div className="relative h-48 overflow-hidden bg-[#08080a]">
          <img
            src={vehicle.image}
            alt={vehicle.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent" />
          <div className="absolute top-3 right-3 px-3 py-1 bg-[#08080a]/80 backdrop-blur-md border border-[rgba(243,241,234,0.1)] rounded-full text-[11px] font-semibold text-[#ff3b1d]">
            {vehicle.badge}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl uppercase tracking-tight text-[#f3f1ea] group-hover:text-[#ff3b1d] transition-colors">
            {vehicle.category}
          </h3>
          <p className="text-xs text-[#807f78] mt-1">
            {vehicle.modelExample}
          </p>

          <div className="flex items-center gap-4 my-4 py-2.5 px-3 bg-[#08080a] rounded-xl border border-[rgba(243,241,234,0.1)] text-xs text-[#f3f1ea]">
            <div className="flex items-center gap-1.5">
              <IconUsers className="w-4 h-4 text-[#ff3b1d]" />
              <span>{vehicle.passengers} Pax</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconLuggage className="w-4 h-4 text-[#ff3b1d]" />
              <span>{vehicle.luggage} Cases</span>
            </div>
            {vehicle.extraCapacity && (
              <div className="flex items-center gap-1 text-emerald-400">
                <IconWheelchair className="w-4 h-4" />
                <span>+WAV</span>
              </div>
            )}
          </div>

          <p className="text-xs text-[#807f78] leading-relaxed">
            {vehicle.description}
          </p>

          <div className="mt-4 pt-4 border-t border-[rgba(243,241,234,0.1)] space-y-1.5">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] text-[#f3f1ea]">
                <IconCheck className="w-3.5 h-3.5 text-[#ff3b1d] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onSelect(vehicle.id)}
          className="w-full py-3 bg-[#17171b] hover:bg-[#ff3b1d] hover:text-[#08080a] text-[#f3f1ea] font-display text-xs uppercase tracking-wider rounded-xl border border-[rgba(243,241,234,0.1)] transition-all flex items-center justify-center gap-2 group/btn"
        >
          <span>Select Vehicle</span>
          <IconArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

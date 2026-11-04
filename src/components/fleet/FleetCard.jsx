import { IconUsers, IconLuggage, IconCheck, IconWheelchair } from '../common/Icons';

export const FleetCard = ({ vehicle, onSelect }) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-500/5">
      <div>
        <div className="relative h-48 overflow-hidden bg-slate-950">
          <img
            src={vehicle.image}
            alt={vehicle.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full text-[11px] font-semibold text-amber-400">
            {vehicle.badge}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {vehicle.category}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {vehicle.modelExample}
          </p>

          <div className="flex items-center gap-4 my-4 py-2.5 px-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <IconUsers className="w-4 h-4 text-amber-400" />
              <span>{vehicle.passengers} Passengers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconLuggage className="w-4 h-4 text-amber-400" />
              <span>{vehicle.luggage} Cases</span>
            </div>
            {vehicle.extraCapacity && (
              <div className="flex items-center gap-1 text-emerald-400">
                <IconWheelchair className="w-4 h-4" />
                <span>+WAV</span>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {vehicle.description}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                <IconCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
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
          className="w-full py-3 bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-2"
        >
          <span>Select Vehicle</span>
        </button>
      </div>
    </div>
  );
};


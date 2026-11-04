import { journeyTabs } from '../../mockup/booking';
import { IconCar, IconPlane } from '../common/Icons';

export const BookingTabs = ({ activeTab, onSelectTab }) => {
  return (
    <div className="flex border-b border-slate-800 bg-slate-900/70 p-2 gap-2 rounded-t-2xl">
      {journeyTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              isActive
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {tab.id === 'airport' ? (
              <IconPlane className="w-4 h-4 flex-shrink-0" />
            ) : (
              <IconCar className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};


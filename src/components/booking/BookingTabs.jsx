import { journeyTabs } from '../../mockup/booking';
import { IconCar, IconPlane } from '../common/Icons';

export const BookingTabs = ({ activeTab, onSelectTab }) => {
  return (
    <div className="flex w-full border-b border-[rgba(243,241,234,0.1)] bg-[#111114] p-1.5 sm:p-2 gap-1 sm:gap-2 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
      {journeyTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex-1 py-2.5 sm:py-3 px-1 sm:px-4 rounded-xl font-display text-[11px] sm:text-sm uppercase tracking-tight sm:tracking-wider flex items-center justify-center gap-1 sm:gap-2 transition-all whitespace-nowrap ${
              isActive
                ? 'bg-[#ff3b1d] text-[#08080a] shadow-lg shadow-[#ff3b1d]/20'
                : 'text-[#807f78] hover:text-[#f3f1ea] hover:bg-[#17171b]'
            }`}
          >
            {tab.id === 'airport' ? (
              <IconPlane className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            ) : (
              <IconCar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            )}
            {tab.id === 'airport' ? (
              <>
                <span className="hidden sm:inline">Airport Transfer</span>
                <span className="inline sm:hidden">Airport</span>
              </>
            ) : (
              <span>{tab.label}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

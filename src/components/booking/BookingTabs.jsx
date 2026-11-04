import { journeyTabs } from '../../mockup/booking';
import { IconCar, IconPlane } from '../common/Icons';

export const BookingTabs = ({ activeTab, onSelectTab }) => {
  return (
    <div className="flex border-b border-[rgba(243,241,234,0.1)] bg-[#111114] p-2 gap-2 rounded-t-2xl">
      {journeyTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-xl font-display text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              isActive
                ? 'bg-[#ff3b1d] text-[#08080a] shadow-lg shadow-[#ff3b1d]/20'
                : 'text-[#807f78] hover:text-[#f3f1ea] hover:bg-[#17171b]'
            }`}
          >
            {tab.id === 'airport' ? (
              <IconPlane className="w-4 h-4 shrink-0" />
            ) : (
              <IconCar className="w-4 h-4 shrink-0" />
            )}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

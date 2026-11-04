import { useState, useRef, useEffect } from 'react';
import { IconMapPin } from './Icons';

export const AddressInput = ({
  value,
  onChange,
  placeholder,
  suggestions = [],
  required = false,
  iconColor = 'text-emerald-400'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes((value || '').toLowerCase())
  );

  const displayList = filtered.length > 0 ? filtered : suggestions;

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        required={required}
        value={value}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        placeholder={placeholder}
        className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] hover:border-[rgba(243,241,234,0.25)] focus:border-[#ff3b1d] rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#f3f1ea] placeholder-[#807f78] focus:outline-none transition-colors"
      />

      {isOpen && displayList.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-xl shadow-2xl p-1.5 max-h-56 overflow-y-auto custom-scrollbar animate-fadeIn">
          <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#807f78] border-b border-[rgba(243,241,234,0.06)] mb-1">
            Suggested UK Locations
          </div>
          {displayList.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm text-[#f3f1ea] hover:bg-[#17171b] hover:text-[#ff3b1d] transition-all flex items-center gap-2.5 group"
            >
              <IconMapPin className={`w-3.5 h-3.5 ${iconColor} shrink-0 group-hover:text-[#ff3b1d] transition-colors`} />
              <span className="truncate">{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


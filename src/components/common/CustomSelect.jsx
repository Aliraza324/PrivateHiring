import { useState, useRef, useEffect } from 'react';

export const CustomSelect = ({
  value,
  onChange,
  options = [],
  placeholder = 'Select option...',
  className = '',
  align = 'left'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) =>
    typeof opt === 'object' ? opt.value === value : opt === value
  );

  const getLabel = (opt) => (typeof opt === 'object' ? opt.label : opt);
  const getValue = (opt) => (typeof opt === 'object' ? opt.value : opt);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] hover:border-[rgba(243,241,234,0.25)] focus:border-[#ff3b1d] rounded-xl px-3 py-2.5 sm:px-3.5 sm:py-3 text-xs sm:text-sm text-[#f3f1ea] flex items-center justify-between gap-2 transition-all outline-none"
      >
        <span className="truncate">
          {selectedOption ? getLabel(selectedOption) : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#807f78] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-[#ff3b1d]' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            align === 'right' ? 'right-0 left-auto' : 'left-0 right-auto'
          } min-w-full w-max max-w-[calc(100vw-2.5rem)] top-full mt-1.5 z-50 bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-xl shadow-2xl p-1.5 max-h-60 overflow-y-auto custom-scrollbar animate-fadeIn`}
        >
          {options.map((opt, i) => {
            const optVal = getValue(opt);
            const optLabel = getLabel(opt);
            const isSelected = optVal === value;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  onChange(optVal);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm flex items-center justify-between gap-3 transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#ff3b1d] text-[#08080a] font-bold shadow-md shadow-[#ff3b1d]/20'
                    : 'text-[#f3f1ea] hover:bg-[#17171b] hover:text-[#ff3b1d]'
                }`}
              >
                <span className="whitespace-nowrap">{optLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08080a] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

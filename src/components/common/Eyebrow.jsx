export const Eyebrow = ({ label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#807f78] ${className}`}>
      <span className="w-2 h-2 rounded-full bg-[#ff3b1d] shrink-0" />
      <span>{label}</span>
    </div>
  );
};


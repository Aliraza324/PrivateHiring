import { marqueeWords } from '../../mockup/marquee';

export const Marquee = () => {
  return (
    <section
      aria-label="Operating principles"
      className="overflow-hidden border-y border-[rgba(243,241,234,0.1)] py-5 sm:py-6 bg-[#08080a] select-none"
    >
      <div className="flex w-max flex-nowrap animate-marquee">
        {[...marqueeWords, ...marqueeWords].map((word, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#f3f1ea]">
              {word}
            </span>
            <span className="mx-5 sm:mx-7 w-2 h-2 rounded-full bg-[#ff3b1d] shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

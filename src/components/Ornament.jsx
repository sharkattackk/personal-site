// Small brass ornaments shared across sections.

const GOLD = "#C9A24E";
const GOLD_LIGHT = "#E6CF8B";

export const Compass = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <circle cx="20" cy="20" r="18" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.7" />
    {/* eight-point rose */}
    <path d="M20 2 L22.6 17.4 L38 20 L22.6 22.6 L20 38 L17.4 22.6 L2 20 L17.4 17.4 Z" fill={GOLD} />
    <path d="M20 8 L21.6 18.4 L32 20 L21.6 21.6 L20 32 L18.4 21.6 L8 20 L18.4 18.4 Z" fill={GOLD_LIGHT} />
    <path d="M9.4 9.4 L19 18 L20 20 L18 19 Z M30.6 9.4 L21 18 L20 20 L22 19 Z M9.4 30.6 L19 22 L20 20 L18 21 Z M30.6 30.6 L21 22 L20 20 L22 21 Z" fill={GOLD} opacity="0.8" />
    <circle cx="20" cy="20" r="1.8" fill="currentColor" />
  </svg>
);

// Full-width hairline with a compass rose at the centre.
export const SectionRule = ({ className = "" }) => (
  <div className={`flex items-center gap-6 ${className}`} aria-hidden="true">
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold/70" />
    <Compass />
    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold/70" />
  </div>
);

// Small-caps label in brass with short rules either side.
export const Eyebrow = ({ children, center = false, className = "" }) => (
  <p
    className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-caps text-gold ${
      center ? "justify-center" : ""
    } ${className}`}
  >
    <span className="h-px w-8 bg-gold/70" />
    <span>{children}</span>
    {center && <span className="h-px w-8 bg-gold/70" />}
  </p>
);

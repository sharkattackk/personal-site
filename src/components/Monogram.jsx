// Circular "CB" crest: a brass double ring with the initials in serif.
// Ring is always brass; the letters take the current text colour.

const GOLD = "#C9A24E";

const Monogram = ({ size = 48, className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="47" fill="none" stroke={GOLD} strokeWidth="1.6" />
    <circle cx="50" cy="50" r="41.5" fill="none" stroke={GOLD} strokeWidth="0.8" strokeDasharray="1.5 3" opacity="0.9" />
    {/* cardinal ticks */}
    <path d="M50 4.5 v5 M50 90.5 v5 M4.5 50 h5 M90.5 50 h5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
    <text
      x="50"
      y="61"
      textAnchor="middle"
      fontSize="34"
      fontFamily="'Playfair Display', Georgia, serif"
      fontWeight="600"
      letterSpacing="1"
      fill="currentColor"
    >
      CB
    </text>
  </svg>
);

export default Monogram;

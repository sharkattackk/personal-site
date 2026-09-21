import { useId } from "react";

// A run of slim signal-style pennants on a brass halyard, one per skill.
// Drawn as a single SVG so the flags follow the gentle sag of the line.
// Colours come from CSS variables (see index.css) so they swap cleanly in dark mode.

const FLAG_W = 92;
const FLAG_H = 124;
const SLOT = 106;
const PAD = 44;
const ROPE_Y = 18;
const SAG = 20;

// top band / lower tip / label colour. Names refer to CSS variables.
const PATTERNS = [
  { top: "navy", tip: "cream", text: "on-navy" },
  { top: "cream", tip: "ocean", text: "on-cream" },
  { top: "ocean", tip: "cream", text: "on-ocean" },
  { top: "cream", tip: "crimson", text: "on-cream" },
  { top: "gold", tip: "navy", text: "on-gold" },
];
const COLOURS = ["navy", "cream", "ocean", "crimson", "gold"];

const bez = (t, a, c, b) => (1 - t) ** 2 * a + 2 * (1 - t) * t * c + t ** 2 * b;
const bezD = (t, a, c, b) => 2 * (1 - t) * (c - a) + 2 * t * (b - c);

const Banner = ({ items, offset = 0 }) => {
  const uid = useId().replace(/:/g, "");
  const gid = (name) => `${uid}-${name}`;

  const n = items.length;
  const width = n * SLOT + PAD * 2;
  const height = ROPE_Y + SAG + FLAG_H + 16;

  const x0 = PAD, x1 = width - PAD, cx = width / 2;
  const y0 = ROPE_Y, cy = ROPE_Y + SAG * 2;

  const rope = `M ${x0} ${y0} Q ${cx} ${cy} ${x1} ${y0}`;
  const half = FLAG_W / 2;
  const band = FLAG_H * 0.4;
  const bandHalf = half * (1 - band / FLAG_H);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="block h-auto w-full" role="list" aria-label="Skills">
      <defs>
        <filter id={gid("shadow")} x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0B2545" floodOpacity="0.3" />
        </filter>
        {/* shaded version of each colour: lighter at the top-left, base at the bottom-right */}
        {COLOURS.map((c) => (
          <linearGradient key={c} id={gid(c)} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={`var(--flag-${c}-hi)`} />
            <stop offset="100%" stopColor={`var(--flag-${c})`} />
          </linearGradient>
        ))}
        {/* soft sheen laid over the cloth */}
        <linearGradient id={gid("sheen")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>
        {/* brass rope */}
        <linearGradient id={gid("rope")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A88433" />
          <stop offset="50%" stopColor="#E6CF8B" />
          <stop offset="100%" stopColor="#A88433" />
        </linearGradient>
      </defs>

      {/* halyard */}
      <path d={rope} fill="none" stroke={`url(#${gid("rope")})`} strokeWidth="2.4" strokeLinecap="round" />

      {/* brass fittings at each end */}
      {[x0, x1].map((x) => (
        <g key={x}>
          <circle cx={x} cy={y0} r="6" fill={`url(#${gid("gold")})`} />
          <circle cx={x} cy={y0} r="2.4" fill="var(--flag-bg)" />
        </g>
      ))}

      {items.map((item, i) => {
        const t = (i + 0.5) / n;
        const x = bez(t, x0, cx, x1);
        const y = bez(t, y0, cy, y0);
        const angle = (Math.atan2(bezD(t, y0, cy, y0), bezD(t, x0, cx, x1)) * 180) / Math.PI;
        const p = PATTERNS[(i + offset) % PATTERNS.length];
        const outline = `${-half},0 ${half},0 0,${FLAG_H}`;
        return (
          <g key={item} role="listitem" transform={`translate(${x} ${y}) rotate(${angle})`} filter={`url(#${gid("shadow")})`}>
            <polygon points={`${-half},0 ${half},0 ${bandHalf},${band} ${-bandHalf},${band}`} fill={`url(#${gid(p.top)})`} />
            <polygon points={`${-bandHalf},${band} ${bandHalf},${band} 0,${FLAG_H}`} fill={`url(#${gid(p.tip)})`} />
            <polygon points={outline} fill={`url(#${gid("sheen")})`} />
            <polygon points={outline} fill="none" stroke="var(--flag-gold)" strokeWidth="1.2" strokeLinejoin="round" />
            <line x1={-bandHalf} y1={band} x2={bandHalf} y2={band} stroke="var(--flag-gold)" strokeWidth="0.8" opacity="0.9" />
            <circle cx="0" cy="0" r="2.8" fill={`url(#${gid("gold")})`} />
            <text
              x="0"
              y="20"
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.9"
              fill={`var(--flag-${p.text})`}
              className="font-sans uppercase"
            >
              {item}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const Bunting = ({ items, className = "" }) => {
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];
  return (
    <div className={className}>
      <div className="hidden md:block">
        <Banner items={items} />
      </div>
      <div className="flex flex-col gap-1 md:hidden">
        {rows.map((row, i) => (
          <Banner key={i} items={row} offset={i * half} />
        ))}
      </div>
    </div>
  );
};

export default Bunting;

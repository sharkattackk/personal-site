import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
  FaArrowsAltH,
} from "react-icons/fa";

// --- Data (chronological) -----------------------------------------------
// Fractional years: 0.33 = May, 0.67 = September.

const SEP = 8 / 12;
const MAY = 4 / 12;

const items = [
  {
    type: "education",
    title: "High School",
    subtitle: "AP",
    location: "Ontario, Canada",
    period: "2016 — 2020",
    start: 2016,
    end: 2020 + MAY,
  },
  {
    type: "education",
    title: "Queen's University",
    subtitle: "Year 1 — Engineering",
    location: "Kingston, ON",
    period: "Sep '20 — Apr '21",
    start: 2020 + SEP,
    end: 2021 + MAY,
  },
  {
    type: "work",
    title: "SE Intern",
    subtitle: "Woodgrove Technologies",
    location: "Toronto, ON",
    period: "Summer '21",
    start: 2021 + MAY,
    end: 2021 + SEP,
    tech: ["C++", "YOLO"],
  },
  {
    type: "education",
    title: "Queen's University",
    subtitle: "Year 2 — Computer Engineering",
    location: "Kingston, ON",
    period: "Sep '21 — Apr '22",
    start: 2021 + SEP,
    end: 2022 + MAY,
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    subtitle: "Woodgrove Technologies",
    location: "Toronto, ON",
    period: "Summer '22",
    start: 2022 + MAY,
    end: 2022 + SEP,
    tech: ["C++", "YOLO"],
  },
  {
    type: "education",
    title: "Queen's University",
    subtitle: "Year 3 — Computer Engineering",
    location: "Kingston, ON",
    period: "Sep '22 — Apr '23",
    start: 2022 + SEP,
    end: 2023 + MAY,
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    subtitle: "Woodgrove Technologies",
    location: "Toronto, ON",
    period: "Summer '23",
    start: 2023 + MAY,
    end: 2023 + SEP,
    tech: ["C++", "YOLO"],
  },
  {
    type: "education",
    title: "Queen's University",
    subtitle: "Year 4 — Computer Engineering",
    location: "Kingston, ON",
    period: "Sep '23 — Apr '24",
    start: 2023 + SEP,
    end: 2024 + MAY,
  },
  {
    type: "work",
    title: "Computer Vision Engineer",
    subtitle: "Avo Inc.",
    location: "Toronto, ON",
    period: "May '24 — Present",
    start: 2024 + MAY,
    end: 2026 + MAY,
    ongoing: true,
    tech: ["Python", "AWS", "Kubernetes", "TypeScript", "React"],
  },
];

// Two items "touch" when one ends where the next begins (within a tolerance).
const touches = (a, b) => Math.abs(a.end - b.start) < 0.02;

// --- Card ---------------------------------------------------------------

const TimelineCard = ({ item }) => {
  const isWork = item.type === "work";
  const Icon = isWork ? FaBriefcase : FaGraduationCap;
  return (
    <div
      className={`relative flex w-[230px] flex-shrink-0 select-none flex-col gap-2 border bg-white/40 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 dark:bg-white/5 ${
        item.ongoing
          ? "border-accent-blue shadow-[0_0_40px_rgba(44,146,209,0.55)] ring-1 ring-accent-blue/40 hover:shadow-[0_0_50px_rgba(44,146,209,0.7)]"
          : isWork
          ? "border-accent-blue/40 shadow-md hover:border-accent-blue/70 hover:shadow-xl"
          : "border-harbour-blue/40 shadow-md hover:border-harbour-blue/70 hover:shadow-xl"
      }`}
    >
      {/* Type pill + live indicator */}
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-blue">
          <Icon className="text-[10px]" />
          <span>{isWork ? "WORK //" : "SCHOOL //"}</span>
        </div>
        {item.ongoing && (
          <div className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-green-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            <span>LIVE</span>
          </div>
        )}
      </div>

      {/* Title + subtitle */}
      <div>
        <h3 className="text-sm font-bold leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-dark-gray/70 dark:text-light-gray/70">
          {item.subtitle}
        </p>
      </div>

      {/* Tech chips */}
      {item.tech && (
        <div className="flex flex-wrap gap-1">
          {item.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="border border-dark-gray/15 bg-white/50 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider dark:border-white/15 dark:bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Footer: period + location */}
      <div className="mt-auto border-t border-dark-gray/10 pt-2 dark:border-white/10">
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest">
          {item.period}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-widest text-dark-gray/55 dark:text-light-gray/55">
          {item.location}
        </div>
      </div>
    </div>
  );
};

// --- Separator ----------------------------------------------------------

const Separator = ({ joined }) => (
  <div className="flex flex-shrink-0 items-center gap-1 px-2 font-mono text-accent-blue">
    {joined ? (
      <>
        <span className="text-sm tracking-widest opacity-60">···</span>
        <FaArrowRight className="text-xs" />
        <span className="text-sm tracking-widest opacity-60">···</span>
      </>
    ) : (
      <FaArrowRight className="text-xs opacity-70" />
    )}
  </div>
);

const PresentSeparator = () => (
  <div className="flex flex-shrink-0 items-center gap-3 px-8 font-mono text-accent-blue">
    <span className="text-sm tracking-widest opacity-40">·····</span>
    <FaArrowRight className="text-sm" />
    <span className="border border-accent-blue/60 bg-accent-blue/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest">
      NOW //
    </span>
    <FaArrowRight className="text-sm" />
    <span className="text-sm tracking-widest opacity-40">·····</span>
  </div>
);

// --- Section ------------------------------------------------------------

const TimelineSection = () => {
  const scrollRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Double-rAF so the scroll runs after the row has been measured.
    const scrollToEnd = () => {
      el.scrollLeft = el.scrollWidth;
    };
    requestAnimationFrame(() => requestAnimationFrame(scrollToEnd));

    const timer = setTimeout(() => {
      const dismiss = () => setShowHint(false);
      el.addEventListener("scroll", dismiss, { once: true });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const onPointerDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current.down = true;
    drag.current.moved = false;
    drag.current.startX = e.pageX - el.offsetLeft;
    drag.current.scrollLeft = el.scrollLeft;
    setIsDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 5) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollLeft - walk;
  };

  const onPointerUp = (e) => {
    drag.current.down = false;
    setIsDragging(false);
    const el = scrollRef.current;
    if (el && el.hasPointerCapture(e.pointerId))
      el.releasePointerCapture(e.pointerId);
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-light-gray px-6 py-24 text-dark-gray transition-colors duration-300 dark:bg-dark-gray dark:text-light-gray md:px-20"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-harbour-blue/10 blur-3xl" />

      {/* Faint blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#2c92d1 1px, transparent 1px), linear-gradient(90deg, #2c92d1 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Header */}
      <div className="relative mx-auto mb-12 max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent-blue">
              JOURNEY //
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Where I've{" "}
              <span className="bg-gradient-to-r from-accent-blue to-harbour-blue bg-clip-text text-transparent">
                been
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-dark-gray/70 dark:text-light-gray/70">
              School and work in sequence — summers fill the gaps. Drag the row
              to pan back through the years.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest">
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 border border-harbour-blue/70 bg-harbour-blue/20" />
              <span>School</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 border border-accent-blue/70 bg-accent-blue/20" />
              <span>Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Draggable row — sits on the page, no container box */}
      <div className="relative -mx-6 md:-mx-20">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-light-gray to-transparent dark:from-dark-gray md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-light-gray to-transparent dark:from-dark-gray md:w-20" />

        {/* Drag hint */}
        {showHint && (
          <div className="pointer-events-none absolute left-8 top-2 z-30 inline-flex items-center gap-2 border border-accent-blue/40 bg-white/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent-blue shadow-lg backdrop-blur-md dark:bg-white/10 md:left-24">
            <FaArrowsAltH />
            <span>Drag to pan history</span>
          </div>
        )}

        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={(e) => {
            if (drag.current.moved) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          className={`hide-scrollbar overflow-x-auto px-6 py-4 md:px-20 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "pan-y" }}
        >
          <div className="flex items-stretch gap-0">
            {items.map((item, i) => (
              <Fragment key={`${item.title}-${item.start}`}>
                <TimelineCard item={item} />
                {i < items.length - 1 &&
                  (items[i + 1].ongoing ? (
                    <PresentSeparator />
                  ) : (
                    <Separator joined={touches(item, items[i + 1])} />
                  ))}
              </Fragment>
            ))}
            {/* Trailing spacer — guaranteed part of scrollWidth so the
                LIVE card lands fully clear of the right fade. */}
            <div className="w-48 flex-shrink-0 md:w-[28rem]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

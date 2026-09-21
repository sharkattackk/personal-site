import { Fragment, useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaArrowsAltH } from "react-icons/fa";
import { Eyebrow, SectionRule } from "../Ornament";

// --- Data (chronological) -----------------------------------------------
// Fractional years: 0.33 = May, 0.67 = September.

const SEP = 8 / 12;
const MAY = 4 / 12;

const items = [
  {
    type: "education",
    title: "Crescent School",
    subtitle: "High School",
    location: "Toronto, ON",
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
      className={`relative flex w-[240px] flex-shrink-0 select-none flex-col gap-3 border bg-white/60 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 dark:bg-white/[0.04] ${
        item.ongoing
          ? "border-gold shadow-[0_0_36px_rgba(201,162,78,0.35)]"
          : "border-gold/40 shadow-sm hover:border-gold/80 hover:shadow-md"
      }`}
    >
      {/* corner ticks */}
      <span className="pointer-events-none absolute left-1.5 top-1.5 h-2 w-2 border-l border-t border-gold/70" />
      <span className="pointer-events-none absolute right-1.5 top-1.5 h-2 w-2 border-r border-t border-gold/70" />
      <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-2 w-2 border-b border-l border-gold/70" />
      <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-gold/70" />

      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-caps text-gold">
          <Icon className="text-[10px]" />
          <span>{isWork ? "Work" : "School"}</span>
        </div>
        {item.ongoing && (
          <div className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-caps text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span>Current</span>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-serif text-lg font-medium leading-tight">{item.title}</h3>
        <p className="mt-1 text-xs text-navy/70 dark:text-cream/70">{item.subtitle}</p>
      </div>

      {item.tech && (
        <div className="flex flex-wrap gap-1">
          {item.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="border border-navy/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-navy/80 dark:border-cream/20 dark:text-cream/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto border-t border-gold/30 pt-2">
        <div className="text-[10px] font-medium uppercase tracking-caps">{item.period}</div>
        <div className="text-[10px] italic text-navy/55 dark:text-cream/55">{item.location}</div>
      </div>
    </div>
  );
};

// --- Separators ---------------------------------------------------------

const Diamond = () => <span className="text-[7px] text-gold">◆</span>;

const Separator = ({ joined }) => (
  <div className="flex flex-shrink-0 items-center gap-1.5 px-3">
    <span className={`h-px bg-gold/50 ${joined ? "w-3" : "w-6"}`} />
    <Diamond />
    <span className={`h-px bg-gold/50 ${joined ? "w-3" : "w-6"}`} />
  </div>
);

const PresentSeparator = () => (
  <div className="flex flex-shrink-0 items-center gap-3 px-6">
    <span className="h-px w-8 bg-gold/50" />
    <Diamond />
    <span className="border border-gold/60 px-2.5 py-1 text-[9px] font-medium uppercase tracking-caps text-gold">
      Now
    </span>
    <Diamond />
    <span className="h-px w-8 bg-gold/50" />
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
    if (el && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-cream px-6 py-24 text-navy dark:bg-navy dark:text-cream md:px-20"
    >
      <div className="texture pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-sky/50 blur-3xl dark:bg-ocean/25" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl dark:bg-gold/10" />

      <div className="relative mx-auto mb-12 max-w-7xl">
        <SectionRule className="mb-14" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Journey</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              Where I&apos;ve <span className="italic text-ocean dark:text-sky">been</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/65 dark:text-cream/65">
              School and work, in order. Drag the row to scroll back through the years.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-caps text-navy/70 dark:text-cream/70">
            <div className="inline-flex items-center gap-2">
              <FaGraduationCap className="text-gold" />
              <span>School</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <FaBriefcase className="text-gold" />
              <span>Work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mx-6 md:-mx-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-cream to-transparent dark:from-navy md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-cream to-transparent dark:from-navy md:w-20" />

        {showHint && (
          <div className="pointer-events-none absolute left-8 top-2 z-30 inline-flex items-center gap-2 border border-gold/60 bg-cream/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-caps text-gold shadow-md dark:bg-navy/90 md:left-24">
            <FaArrowsAltH />
            <span>Drag to scroll</span>
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
          className={`hide-scrollbar overflow-x-auto px-6 py-6 md:px-20 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "pan-y" }}
        >
          <div className="flex items-stretch">
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
            {/* Trailing spacer so the current card clears the right-hand fade */}
            <div className="w-48 flex-shrink-0 md:w-[28rem]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

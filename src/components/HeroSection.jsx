import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const techStack = ["Python", "Javascript", "Kubernetes", "Docker"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-light-gray">
      {/* ── Industrial: caution stripe at very top ── */}
      {/* <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[6] h-1.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #2c92d1 0 10px, #024A62 10px 20px)",
          opacity: 0.6,
        }}
      /> */}

      {/* ── Animated gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blue/30 dark:bg-accent-blue/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-harbour-blue/40 dark:bg-harbour-blue/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[420px] h-[420px] rounded-full bg-neutral-gray/60 dark:bg-accent-blue/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* ── Blueprint grid: minor + major ── */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(#2c92d1 1px, transparent 1px), linear-gradient(90deg, #2c92d1 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* ── Top ruler strip ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-3 z-[5] h-2"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(44,146,209,0.55) 1px, transparent 1px)",
          backgroundSize: "32px 100%",
        }}
      />

      {/* ── Corner crop marks (CAD-style brackets) ── */}
      <div className="pointer-events-none absolute inset-6 z-[5]">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-accent-blue/70" />
        <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-accent-blue/70" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-accent-blue/70" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent-blue/70" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 py-24 sm:px-10 md:px-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Industrial status readout */}
            {/* <div className="inline-flex items-center gap-3 border border-accent-blue/40 bg-dark-gray/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-dark-gray dark:bg-white/5 dark:text-light-gray">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>SYS://STATUS</span>
              <span className="text-accent-blue">[OPERATIONAL]</span>
              <span className="hidden text-dark-gray/40 dark:text-light-gray/40 sm:inline">·</span>
              <span className="hidden text-dark-gray/70 dark:text-light-gray/70 sm:inline">
                Accepting new contracts
              </span>
            </div> */}

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Cameron{" "}
              <span className="bg-gradient-to-r from-accent-blue via-harbour-blue to-accent-blue bg-clip-text text-transparent">
                Bennett
              </span>
              <span className="text-accent-blue">.</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-dark-gray/70 dark:text-light-gray/70 sm:text-xl lg:mx-0">
              Full-stack engineer building software and infrastructure with the mission of providing heavy industry with the data it's missing.
            </p>

            {/* Tech stack pills (industrial part-number style) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="font-mono text-[10px] uppercase tracking-widest text-dark-gray/50 dark:text-light-gray/50">
                MODULES //
              </span>
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 border border-dark-gray/15 bg-white/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md transition hover:border-accent-blue/60 dark:border-white/15 dark:bg-white/5"
                >
                  <span className="text-accent-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span>{tech}</span>
                </span>
              ))}
              <span className="inline-flex items-center gap-1 border border-accent-blue/40 bg-gradient-to-r from-accent-blue/15 to-harbour-blue/15 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-blue shadow-sm shadow-accent-blue/10 backdrop-blur-md transition hover:border-accent-blue/70 dark:from-accent-blue/20 dark:to-harbour-blue/20">
                <span>+</span>
                <span>10 more</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark-gray px-7 py-3.5 font-medium text-light-gray shadow-lg shadow-dark-gray/20 transition-all hover:scale-105 hover:shadow-xl dark:bg-light-gray dark:text-dark-gray dark:shadow-light-gray/10"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white border border-dark-gray/20 bg-white/30 px-7 py-3.5 font-medium backdrop-blur-md transition-all hover:scale-105 hover:bg-white/50 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center gap-5 text-xl text-dark-gray/60 dark:text-light-gray/60 lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition text-white hover:scale-110 hover:text-accent-blue"
              >
                <FaGithub />
              </a>
              <a
                href="https://ca.linkedin.com/in/cameron-bennett-b8339b204"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:scale-110 text-white hover:text-accent-blue"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="transition hover:scale-110 text-white hover:text-accent-blue"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="relative flex-shrink-0">
            {/* Glow ring */}
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-accent-blue via-harbour-blue to-accent-blue opacity-60 blur-2xl" />

            {/* CAD crosshair overlay above headshot */}
            <svg
              className="pointer-events-none absolute -top-6 -left-6 -right-6 -bottom-6 z-10 text-accent-blue/50"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="50" y1="0" x2="50" y2="8" stroke="currentColor" strokeWidth="0.4" />
              <line x1="50" y1="92" x2="50" y2="100" stroke="currentColor" strokeWidth="0.4" />
              <line x1="0" y1="50" x2="8" y2="50" stroke="currentColor" strokeWidth="0.4" />
              <line x1="92" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.4" />
            </svg>

            {/* Gradient border ring */}
            <div className="relative rounded-full bg-gradient-to-tr from-accent-blue via-harbour-blue to-accent-blue p-1.5 shadow-2xl">
              <div className="rounded-full bg-light-gray p-1 dark:bg-dark-gray">
                <img
                  src="/headshot.png"
                  alt="Cameron Bennett"
                  className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 md:h-80 md:w-80"
                />
              </div>
            </div>

            {/* CAD callout: SUBJECT spec (top-right) */}
            <div className="absolute -top-4 -right-8 border border-accent-blue/50 bg-white/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest shadow-lg backdrop-blur-md dark:bg-dark-gray/85">
              <div className="text-accent-blue">SUBJECT</div>
              <div className="font-bold tracking-wider">CB-001</div>
              <div className="text-dark-gray/60 dark:text-light-gray/60">REV 5.2</div>
            </div>

            {/* CAD callout: LOC (bottom-left) */}
            <div className="absolute -bottom-4 -left-8 border border-accent-blue/50 bg-white/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest shadow-lg backdrop-blur-md dark:bg-dark-gray/85">
              <div className="text-accent-blue">LOC</div>
              <div className="font-bold tracking-wider">43.65°N · 79.38°W</div>
              <div className="text-dark-gray/60 dark:text-light-gray/60">Toronto, ON</div>
            </div>
          </div>
        </div>

        {/* GitHub contributions card */}
        {/* <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="group text-white relative mx-auto w-full max-w-4xl overflow-hidden border border-accent-blue/30 bg-white/40 p-4 shadow-xl backdrop-blur-md transition-all hover:scale-[1.01] hover:border-accent-blue/60 dark:border-accent-blue/40 dark:bg-white/5 sm:p-5"
        >
          <span className="pointer-events-none absolute top-1 left-1 h-2.5 w-2.5 border-t border-l border-accent-blue/70" />
          <span className="pointer-events-none absolute top-1 right-1 h-2.5 w-2.5 border-t border-r border-accent-blue/70" />
          <span className="pointer-events-none absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l border-accent-blue/70" />
          <span className="pointer-events-none absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-accent-blue/70" /> */}

          {/* <div className="mb-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
              <FaGithub className="text-base" />
              <span className="text-accent-blue">LOG //</span>
              <span>2,590 commits · FY-2025</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-dark-gray/60 transition group-hover:text-accent-blue dark:text-light-gray/60">
              [View on GitHub →]
            </span>
          </div> */}
          {/* <img
            src="/mining.jpeg"
            alt="GitHub contributions graph for 2025"
            className="w-full"
          /> */}
        {/* </a> */}
      </div>

      {/* ── Title block (CAD drawing legend, bottom-right) ── */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-[5] hidden border border-accent-blue/50 bg-white/80 font-mono text-[10px] uppercase tracking-widest shadow-lg backdrop-blur-md dark:bg-dark-gray/80 md:block">
        <div className="grid grid-cols-[auto,1fr] divide-x divide-accent-blue/30">
          <div className="p-2">
            <div className="text-dark-gray/50 dark:text-light-gray/50">NAME</div>
            <div className="font-bold">CAMERON.B</div>
          </div>
          <div className="p-2">
            <div className="text-dark-gray/50 dark:text-light-gray/50">PROJECT</div>
            <div className="font-bold">PORTFOLIO</div>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-accent-blue/30 border-t border-accent-blue/30">
          <div className="p-2">
            <div className="text-dark-gray/50 dark:text-light-gray/50">REV</div>
            <div className="font-bold text-accent-blue">2.6</div>
          </div>
          <div className="p-2">
            <div className="text-dark-gray/50 dark:text-light-gray/50">SHEET</div>
            <div className="font-bold">01/04</div>
          </div>
          <div className="p-2">
            <div className="text-dark-gray/50 dark:text-light-gray/50">DATE</div>
            <div className="font-bold">2026.05</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#journey"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-dark-gray/60 dark:text-light-gray/60"
        aria-label="Scroll down"
      >
        <span>[ SCROLL ]</span>
        <FaChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;

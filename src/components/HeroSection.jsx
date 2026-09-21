import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const techStack = ["Python", "JavaScript", "React", "AWS", "Kubernetes", "Docker"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-light-gray">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blue/30 dark:bg-accent-blue/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-harbour-blue/40 dark:bg-harbour-blue/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[420px] h-[420px] rounded-full bg-neutral-gray/60 dark:bg-accent-blue/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Blueprint grid: minor + major */}
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

      {/* Top ruler strip */}
      <div
        className="pointer-events-none absolute inset-x-0 top-3 z-[5] h-2"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(44,146,209,0.55) 1px, transparent 1px)",
          backgroundSize: "32px 100%",
        }}
      />

      {/* Corner brackets */}
      <div className="pointer-events-none absolute inset-6 z-[5]">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-accent-blue/70" />
        <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-accent-blue/70" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-accent-blue/70" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent-blue/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 py-24 sm:px-10 md:px-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
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

            {/* Tech stack pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center border border-dark-gray/15 bg-white/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md transition hover:border-accent-blue/60 dark:border-white/15 dark:bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#journey"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark-gray px-7 py-3.5 font-medium text-light-gray shadow-lg shadow-dark-gray/20 transition-all hover:scale-105 hover:shadow-xl dark:bg-light-gray dark:text-dark-gray dark:shadow-light-gray/10"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:tony.misic@avo-inc.ca"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white border border-dark-gray/20 bg-white/30 px-7 py-3.5 font-medium backdrop-blur-md transition-all hover:scale-105 hover:bg-white/50 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center gap-5 text-xl text-dark-gray/60 dark:text-light-gray/60 lg:justify-start">
              <a
                href="https://github.com/cambennett-avo"
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
                href="mailto:tony.misic@avo-inc.ca"
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
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#journey"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-dark-gray/60 dark:text-light-gray/60"
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <FaChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;

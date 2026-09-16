import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const navLinks = [
  { label: "Field Reports", href: "#field" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
];

const socials = [
  {
    label: "GitHub",
    handle: "@cambennett-avo",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "/in/cameron-bennett",
    href: "https://ca.linkedin.com/in/cameron-bennett-b8339b204",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    handle: "tony.misic@avo-inc.ca",
    href: "mailto:tony.misic@avo-inc.ca",
    icon: FaEnvelope,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-accent-blue/30 bg-neutral-gray text-dark-gray dark:bg-med-gray dark:text-light-gray">
      {/* Caution stripe at top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #2c92d1 0 10px, #024A62 10px 20px)",
          opacity: 0.6,
        }}
      />

      {/* Faint blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#2c92d1 1px, transparent 1px), linear-gradient(90deg, #2c92d1 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Corner crop marks */}
      <div className="pointer-events-none absolute inset-4 z-[1]">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-accent-blue/60" />
        <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-accent-blue/60" />
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-accent-blue/60" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent-blue/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-20">
        {/* Eyebrow */}
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent-blue">
          FOOTER //
        </p>

        {/* Main grid */}
        <div className="mt-6 grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold tracking-tight">
              Cameron{" "}
              <span className="bg-gradient-to-r from-accent-blue to-harbour-blue bg-clip-text text-transparent">
                Bennett
              </span>
              <span className="text-accent-blue">.</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-dark-gray/70 dark:text-light-gray/70">
              Full-stack engineer building software and infrastructure for heavy
              industry. Toronto, ON.
            </p>

            {/* Status readout */}
            {/* <div className="inline-flex w-fit items-center gap-2 border border-accent-blue/40 bg-dark-gray/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest dark:bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-accent-blue">[OPERATIONAL]</span>
              <span>Accepting contracts</span>
            </div> */}
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-dark-gray/50 dark:text-light-gray/50">
              EXPLORE //
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm transition hover:text-accent-blue"
                >
                  <span className="font-mono text-accent-blue opacity-60 transition group-hover:opacity-100">
                    →
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-dark-gray/50 dark:text-light-gray/50">
              GET IN TOUCH //
            </div>
            <div className="flex flex-col gap-2">
              {socials.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-sm transition hover:text-accent-blue"
                >
                  <Icon className="text-base text-dark-gray/60 transition group-hover:text-accent-blue dark:text-light-gray/60" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dark-gray/50 dark:text-light-gray/50">
                      {label}
                    </span>
                    <span className="text-sm">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-accent-blue/20 pt-6 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-dark-gray/60 dark:text-light-gray/60">
            © {year} CAMERON BENNETT · BUILT WITH REACT + TAILWIND
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-dark-gray/50 dark:text-light-gray/50">
              LOC · 43.65°N · 79.38°W
            </span>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 border border-accent-blue/40 px-2.5 py-1 text-accent-blue transition hover:bg-accent-blue/10"
            >
              <span>[ BACK TO TOP ]</span>
              <FaArrowUp className="text-[9px] transition group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

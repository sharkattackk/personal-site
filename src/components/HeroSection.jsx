import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Bunting from "./Bunting";
import { Eyebrow } from "./Ornament";

const skills = [
  "Python",
  "JavaScript",
  "C++",
  "React",
  "AWS",
  "Kubernetes",
  "Docker",
  "OpenCV",
  "Linux",
  "RabbitMQ",
];

const Ribbon = ({ children }) => (
  <svg viewBox="0 0 240 44" className="w-60" aria-hidden="true">
    <path d="M0 6 H240 L228 22 L240 38 H0 L12 22 Z" fill="var(--ribbon-bg)" />
    <path d="M6 10 H232 L223 22 L232 34 H6 L15 22 Z" fill="none" stroke="#C9A24E" strokeWidth="0.8" />
    <text
      x="120"
      y="26.5"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="500"
      letterSpacing="3.2"
      fill="var(--ribbon-fg)"
      className="font-sans uppercase"
    >
      {children}
    </text>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-cream bg-hero-light text-navy dark:bg-navy dark:bg-hero-dark dark:text-cream">
      {/* Toronto skyline, faded heavily into the background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/skyline-day.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_68%] opacity-[0.18] mix-blend-multiply [filter:sepia(0.45)_saturate(0.55)_contrast(1.05)] dark:hidden"
        />
        <img
          src="/skyline-dusk.jpg"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-[center_68%] opacity-[0.38] mix-blend-luminosity dark:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream from-0% via-cream/25 via-55% to-cream/70 to-100% dark:from-navy dark:via-navy/25 dark:to-navy/75" />
      </div>
      <div className="texture pointer-events-none absolute inset-0" />

      {/* Drifting wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[5%] h-[520px] w-[520px] rounded-full bg-sky/40 blur-3xl animate-drift dark:bg-ocean/30" />
      </div>

      {/* Engraved double frame */}
      <div className="pointer-events-none absolute inset-x-5 bottom-5 top-24 hidden border border-gold/60 md:block" />
      <div className="pointer-events-none absolute inset-x-7 bottom-7 top-[6.5rem] hidden border border-gold/30 md:block" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-14 px-6 pb-24 pt-32 sm:px-10 md:px-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>Toronto, Ontario</Eyebrow>
            </div>

            <h1 className="mt-5 font-serif text-6xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Cameron
              <br />
              <span className="surname-gradient pr-2 italic">Bennett</span>
            </h1>

            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-navy/70 dark:text-cream/70 sm:text-lg lg:mx-0">
              Full-stack engineer. I build the whole stack, from the servers on
              site to the applications people use every day.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#journey"
                className="group inline-flex items-center gap-3 bg-btn-navy px-7 py-3 text-[11px] font-medium uppercase tracking-caps text-cream shadow-lg shadow-navy/25 ring-1 ring-gold/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-gold dark:bg-btn-cream dark:text-navy dark:shadow-black/30"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:cambennett72@gmail.com"
                className="inline-flex items-center gap-2 border border-gold bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 px-7 py-3 text-[11px] font-medium uppercase tracking-caps text-navy transition hover:-translate-y-0.5 hover:from-gold/15 hover:via-gold/25 hover:to-gold/15 dark:text-cream"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-lg text-navy/60 dark:text-cream/60 lg:justify-start">
              <a href="https://github.com/cambennett-avo" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gold">
                <FaGithub />
              </a>
              <a href="https://ca.linkedin.com/in/cameron-bennett-b8339b204" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-gold">
                <FaLinkedin />
              </a>
              <a href="mailto:cambennett72@gmail.com" aria-label="Email" className="transition hover:text-gold">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Portrait in a brass-ringed crest with a ribbon beneath */}
          <div className="relative flex flex-shrink-0 flex-col items-center">
            <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-tr from-sky/70 via-gold/10 to-gold/40 blur-2xl dark:from-ocean/50 dark:to-gold/25" />
            <div className="relative rounded-full bg-brass p-[3px] shadow-xl shadow-navy/20 dark:shadow-black/40">
              <div className="rounded-full bg-cream p-2.5 dark:bg-navy">
                <div className="rounded-full border border-gold/70 p-[3px]">
                  <img
                    src="/headshot.png"
                    alt="Cameron Bennett"
                    className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 md:h-80 md:w-80"
                  />
                </div>
              </div>
            </div>
            <div className="relative -mt-5">
              <Ribbon>Computer Engineer</Ribbon>
            </div>
          </div>
        </div>

        {/* Skills, flown as pennants */}
        <div className="mx-auto w-full max-w-5xl">
          <Bunting items={skills} />
        </div>
      </div>

      <a
        href="#field"
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-caps text-gold"
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <FaChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;

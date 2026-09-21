import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import Monogram from "../Monogram";

const navLinks = [
  { label: "On location", href: "#field" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "CV", href: "/cv.html", external: true, download: true },
];

const socials = [
  { label: "GitHub", handle: "@cambennett-avo", href: "https://github.com/cambennett-avo", icon: FaGithub },
  { label: "LinkedIn", handle: "/in/cameron-bennett", href: "https://ca.linkedin.com/in/cameron-bennett-b8339b204", icon: FaLinkedin },
  { label: "Email", handle: "cambennett72@gmail.com", href: "mailto:cambennett72@gmail.com", icon: FaEnvelope },
];

const downloadPdf = () => {
  const a = document.createElement("a");
  a.href = "/Cameron_Bennett_Resume.pdf";
  a.download = "Cameron_Bennett_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy bg-navy-radial text-cream dark:bg-deep-navy dark:bg-navy-radial-deep">
      <div className="texture pointer-events-none absolute inset-0" />

      {/* Regimental band */}
      <div className="flex h-2.5 w-full">
        <div className="w-1/3 bg-gold" />
        <div className="w-1/3 bg-cream" />
        <div className="w-1/3 bg-crimson" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Crest */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Monogram size={56} />
              <div>
                <div className="font-serif text-2xl font-medium">Cameron Bennett</div>
                <div className="text-[10px] uppercase tracking-caps text-gold">Computer Engineer</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              Full-stack engineer. Toronto, Ontario.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-medium uppercase tracking-caps text-gold">Explore</div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={link.download ? downloadPdf : undefined}
                  className="group inline-flex items-center gap-3 text-sm transition hover:text-gold-light"
                >
                  <span className="h-px w-4 bg-gold/60 transition-all group-hover:w-7" />
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-medium uppercase tracking-caps text-gold">Get in touch</div>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-sm transition hover:text-gold-light"
                >
                  <Icon className="text-base text-gold/80 transition group-hover:text-gold-light" />
                  <span>{handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gold/25 pt-6 md:flex-row md:items-center">
          <div className="text-[11px] uppercase tracking-caps text-cream/50">
            © {year} Cameron Bennett
          </div>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 border border-gold/50 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-caps text-gold transition hover:bg-gold/10"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[9px] transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Monogram from "./Monogram";

const downloadPdf = () => {
  const a = document.createElement("a");
  a.href = "/Cameron_Bennett_Resume.pdf";
  a.download = "Cameron_Bennett_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const links = [
  { name: "On location", route: "#field" },
  { name: "Journey", route: "#journey" },
  { name: "About", route: "#about" },
  { name: "CV", route: "/cv.html", external: true, download: true },
];

const NavBar = ({ toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    toggleDarkMode();
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-gold/30 bg-cream/85 backdrop-blur-md dark:bg-navy/85"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
        <a href="#home" className="flex items-center gap-3 text-navy dark:text-cream">
          <Monogram size={38} />
          <span className="hidden font-serif text-lg font-medium tracking-wide md:block">
            Cameron Bennett
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-caps text-navy/75 dark:text-cream/75 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.route}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              onClick={item.download ? downloadPdf : undefined}
              className="transition hover:text-gold"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={handleThemeToggle}
          aria-label="Toggle dark mode"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold transition hover:bg-gold/10"
        >
          {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;

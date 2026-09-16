import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const NavBar = ({ toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    toggleDarkMode(); // calls parent function
  };


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl dark:bg-dark-gray/70 shadow-2xl bg-neutral-gray/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium tracking-wide text-black dark:text-white hidden md:block">
              Cameron Bennett
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-base tracking-wide text-black dark:text-white">
          {[{name: "Journey", route: "#journey" }, {name: "About", route: "#about" }].map((item) => (
            <a key={item.name} href={item.route} className="text-dark-gray hover:text-black dark:text-light-gray dark:hover:text-white hover:opacity-70 transition cursor-pointer">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          
          {/* Day / Evening Toggle */}
          <button
            onClick={handleThemeToggle}
            className="relative h-10 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 flex items-center px-2"
          >
            {/* Sliding Circle */}
            <div
              className={`absolute top-1 left-2 w-[40%] h-8 rounded-full bg-white dark:bg-black shadow-md transform transition-all duration-300 ${
                isDark ? "translate-x-7" : "translate-x-0"
              }`}
            />

            {/* Labels */}
            <div className="flex justify-between space-x-4 w-full text-xs font-medium px-2 z-10">
              <span className="flex items-center w-1/2  space-x-1 text-black dark:text-gray-400">
                <FaSun className="text-xs" />
              </span>
              <span className="flex items-center w-1/2 space-x-1 text-gray-400 dark:text-white">
                <FaMoon className="text-xs" />
              </span>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
};

export default NavBar;

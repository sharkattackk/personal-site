/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },

      colors: {
        "dark-gray": "#151419",
        "med-gray": "#23242A",
        "light-gray": "#FEF2DB",
        "neutral-gray": "#F7E5C3",
        "accent-blue": "#2c92d1",
        "harbour-blue": "#024A62"
      },

      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
      },
      animation: {
        blob: "blob 12s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-delay-2000": { "animation-delay": "2s" },
        ".animation-delay-4000": { "animation-delay": "4s" },
      });
    },
  ],
}


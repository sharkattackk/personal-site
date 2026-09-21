/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },

      colors: {
        // Blues
        "navy":      "#0B2545",
        "deep-navy": "#071A33",
        "deep-blue": "#143B6B",
        "ocean":     "#1D4E89",
        "sky":       "#A9C4DE",
        // Creams
        "cream":     "#F5EFE0",
        "sand":      "#EAE0C8",
        // Brass and a single burgee red
        "gold":      "#C9A24E",
        "gold-light":"#E6CF8B",
        "crimson":   "#9E2A2B",
      },

      letterSpacing: {
        caps: "0.28em",
      },

      backgroundImage: {
        // cream hero: sky wash top-right, brass glow bottom-left, gentle vertical fade
        "hero-light":
          "radial-gradient(60% 55% at 85% 10%, rgba(169,196,222,0.65), transparent 70%), radial-gradient(45% 45% at 5% 95%, rgba(201,162,78,0.22), transparent 70%), linear-gradient(180deg, #F7F2E6 0%, #F5EFE0 55%, #EDE4CE 100%)",
        // navy hero: royal wash top-right, brass glow bottom-left, fade to deep navy
        "hero-dark":
          "radial-gradient(60% 55% at 85% 10%, rgba(29,78,137,0.7), transparent 70%), radial-gradient(45% 45% at 5% 95%, rgba(201,162,78,0.16), transparent 70%), linear-gradient(180deg, #0F2E52 0%, #0B2545 55%, #071A33 100%)",
        // navy sections
        "navy-radial":
          "radial-gradient(70% 60% at 15% 0%, #1D4E89 0%, #0B2545 55%, #071A33 100%)",
        "navy-radial-deep":
          "radial-gradient(70% 60% at 15% 0%, #143B6B 0%, #071A33 60%, #050F1F 100%)",
        // sand section
        "sand-soft":
          "radial-gradient(50% 40% at 90% 100%, rgba(201,162,78,0.18), transparent 70%), linear-gradient(180deg, #EAE0C8 0%, #F0E8D4 100%)",
        "sand-soft-dark":
          "radial-gradient(50% 40% at 90% 100%, rgba(201,162,78,0.12), transparent 70%), linear-gradient(180deg, #071A33 0%, #0B2545 100%)",
        // brass ring
        "brass":
          "conic-gradient(from 200deg, #A88433, #E6CF8B 25%, #C9A24E 50%, #F0DFA5 75%, #A88433)",
        // primary button
        "btn-navy": "linear-gradient(135deg, #0B2545 0%, #1D4E89 100%)",
        "btn-cream": "linear-gradient(135deg, #FFFDF6 0%, #EAE0C8 100%)",
      },

      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(18px, -14px)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

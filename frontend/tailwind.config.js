/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#101815",
          soft: "#1B2622",
        },
        moss: {
          50: "#F1F6F0",
          100: "#DEEBDA",
          200: "#BBD6B4",
          300: "#93BC88",
          400: "#6B9E5D",
          500: "#4A7F3D",
          600: "#3A662F",
          700: "#2E5126",
          800: "#25401F",
          900: "#1D331A",
        },
        clay: {
          400: "#E2A25B",
          500: "#D68A3C",
          600: "#B96F27",
        },
        sand: "#F7F3EA",
        bone: "#FDFBF6",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,21,0.06), 0 8px 24px rgba(16,24,21,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

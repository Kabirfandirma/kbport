/** @type {import('tailwindcss').Types.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        pastel: {
          lavender: "#e2e8ff",
          yellow: "#fef7cd",
          blue: "#dbeafe",
          pink: "#fce7f3",
          green: "#dcfce7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        typewriter: "typewriter 2s steps(11) forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};

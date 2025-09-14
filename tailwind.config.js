/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { width: "0" },
          "100%": { width: "100%" }, // or a fixed width, e.g. '300px'
        },
      },
      animation: {
        grow: "grow 1s ease-out forwards",
      },
      colors: {
        brand: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          dark: "#5b21b6",
        },
      },
    },
  },
  plugins: [],
};

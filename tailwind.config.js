/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2B2D42",
        "secondary": "#8D99AE",
        "accent": "#EDF2F4",
        "tercero": "#EF233C",
        "cuarto": "#D90429",
      },
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"],
        bebasNeue: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "#f1eee9",
        "background": "#0f0a0f",
        "primary": "#e69005",
        "secondary": "#d82246",
        "accent": "#ef253c",
      },
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"],
        bebasNeue: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/regnum-bg.jpeg)",
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
        "Fjalla": ["Fjalla One", "sans-serif"]
      }
    },
  },
  plugins: [],
}


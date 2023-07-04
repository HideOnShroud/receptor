/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fcfffc",
        dark: "#040f0f",
        mid: "#2d3a3a",
        mainGreen: "#2ba84a",
        sideGreen: "#248232",
      }
    },
  },
  plugins: [],
}


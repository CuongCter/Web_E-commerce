/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4575d8",
        blueDark: "#00005C",
        black: "#000",
        dark: "#222222",
        text1: "#474747",
        text2: "#666666",
        text3: "#666666",
        white: "#fff",
        error: "#f14550",
      },
    },
  },
  plugins: [],
}
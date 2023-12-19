/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#E43C39",
        secondary: "#F9F9F9",
        third: "#FDC755",
        fourth: "#EEEEEE",
        fifth: "#E7EBEE",
      },
    },
  },
  plugins: [],
};

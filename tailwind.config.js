/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        whiteColor: "#FFFFFF",
        orangeColor: "#F99417",
        goldenYellow: "#ffb43a",
        charcoalGray: "#2d2e37",
        darkNavy: "#1e1e2a",
        gunMetalGray: "#3C3B3D",
      },
    },
  },
  plugins: [],
};

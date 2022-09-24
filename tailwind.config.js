/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow\\ Condensed", ...fontFamily.sans],
      barlow: ["Barlow"],
      bellefair: ["Bellefair"],
    },
    letterSpacing: {
      wider: "0.05em",
      widest: "0.2em",
    },
    extend: {
      backgroundImage: {
        home: "url('/home/background-home-desktop.jpg')",
        destination: "url('/destination/background-destination-desktop.jpg')",
        crew: "url('/crew/background-crew-desktop.jpg')",
        technology: "url('/technology/background-technology-desktop.jpg')",
      },
      colors: {
        primary: "#D0D6F9",
      },
    },
  },
  plugins: [],
};

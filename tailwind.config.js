// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "5px 5px 10px #0000003b",
      },
      colors: {
        green: "#7DA870",
        lightGreen: "#8fbc81",
        orange: "#E9A763",
        darkGray: "#343A3F",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

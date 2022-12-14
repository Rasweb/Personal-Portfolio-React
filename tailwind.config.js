/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{ts,tsx}"],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      unbounded: ["Unbounded"],
    },
    extend: {},
  },
  plugins: [],
});

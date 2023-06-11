/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  important: "#root",
  theme: {
    fontSize: {
      sm: '0.7rem',
      base: '0.8rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.752rem',
    },
    fontFamily: {
      title: ['Josefin Sans'],
      header: ['Comfortaa']
    },

    extend: {},
  },
  plugins: [],
});
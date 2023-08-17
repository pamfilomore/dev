/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  important: "#root",
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '0.9rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.2rem',
      '5xl': '3.752rem',
      '6xl': '4.500rem',
    },
    fontFamily: {
      title: ['Josefin Sans'],
      header: ['Comfortaa'],
      navFont: ['Poppins']
    },

    fontWeight: {
      'bold': 600,
      'extrabold': 900
    },
    extend: {},


  },
  plugins: [],
});






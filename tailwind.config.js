/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(213, 96%, 18%)',
        secondary: 'hsl(243, 100%, 62%)',
        lightGrey: 'hsl(228, 100%, 83%)',
        grey: 'hsl(231, 11%, 63%)'
      },
      backgroundImage: {
        navbar: "url('src/assets/images/sidebar-background.svg')",
      },
      backgroundColor: {
        main: 'hsl(218, 100%, 97%)',
      }
    },
  },
  plugins: [],
};
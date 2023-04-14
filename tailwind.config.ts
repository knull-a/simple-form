/* eslint-env node */

import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(218, 100%, 97%)',
        primary: 'hsl(213, 96%, 18%)',
        secondary: 'hsl(243, 100%, 62%)'
      },
      backgroundImage: {
        'navbar': "url('src/assets/images/sidebar-background.svg')"
      }
    },
  },
  plugins: [],
};
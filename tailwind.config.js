import daisyui from 'daisyui';
import tsh from "tailwind-scrollbar-hide"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.jsx'
],
  theme: {
    container : {
      center : true,
    },
    fontFamily : {
      Roboto : [ "Roboto Slab", "serif"],
    },
    extend: {},
  },
  plugins: [daisyui, tsh],
  daisyui: {
    themes : ["night"]
  },
}


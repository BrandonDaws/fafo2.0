const { URL } = require('next/dist/compiled/@edge-runtime/primitives/url');
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('../assets/HeroImageV2.png')",
      },
      colors:{
        'white': '#ffffff',
        'lgtblue': '#00E1FF',
        'lime': '#33FF7E',
        'purp': '#6F0F99',
        'drkblue': '#003440',
        'black': '#000000',
        'cyan': '#06b6d4'
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'     
      }      
        },
  },
  plugins: [],
}
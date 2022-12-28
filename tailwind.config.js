const { URL } = require('next/dist/compiled/@edge-runtime/primitives/url');

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
      }
        },
  },
  plugins: [],
}
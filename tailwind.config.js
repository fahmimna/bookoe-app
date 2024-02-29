// import require from 'react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require("daisyui")
  ],
}


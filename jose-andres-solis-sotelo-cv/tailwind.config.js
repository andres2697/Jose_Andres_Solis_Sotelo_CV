/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-active': '#a681be'
      },
      maxHeight: {
        'screen-minus-72': 'calc(100vh - 112px)',
      }
    },
  },
  plugins: [],
}
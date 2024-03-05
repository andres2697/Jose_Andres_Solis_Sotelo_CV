/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-active': '#a681be',
        'experience-container': '#e96262',
      },
      maxHeight: {
        'screen-minus-72': 'calc(100vh - 112px)',
      },
      maxWidth: {
        'screen-minus-30': 'calc(100% - 29rem)',
      }
    },
  },
  plugins: [],
}
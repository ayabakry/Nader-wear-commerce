/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00527f',
        'brand-red': '#a11d21',
        'dark-bg': '#1b1f22',
      },
    },
  },
  plugins: [],
}

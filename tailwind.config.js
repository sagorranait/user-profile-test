/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#52103c',
        black: '#262626',
        white: '#ffffff',
        gray: '#f5f5f5',
      },
    },
  },
  plugins: [],
}
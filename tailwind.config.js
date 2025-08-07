/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'caramel': '#c48a3a',
        'espresso': '#3b2f2f',
        'bg-light': '#f7f7f5',
        'bg-dark': '#0b0b0c',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'crimson': ['Crimson Pro', 'serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          950: '#0f0f0f'
        }
      }
    },
  },
  plugins: [],
}

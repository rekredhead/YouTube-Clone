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
      },
      screens: {
        '2columns': '822px',
        '3columns': '1174px',
        '4columns': '1526px',
        '5columns': '1910px'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBlack: '#181818',
        mainGrey: '#212121',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1680px',
    },
  },
  plugins: [],
}

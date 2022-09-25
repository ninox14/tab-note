/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBlack: '#181818',
        mainGrey: '#212121',
        accent: '#8774E1',
        noteBg: '#0B0A09',
      },
      transitionProperty: {
        multiple: 'width , height , backgroundColor , border-radius',
      },
    },
    screens: {
      sm: '640px',
      md: '900px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1680px',
    },
    fontFamily: {
      sans: ['Nunito'],
    },
  },
  plugins: [],
}

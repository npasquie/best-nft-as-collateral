module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        DEFAULT: '#2A669F',
        '50': '#E4F7F8',
        '100': '#CCEEF2',
        '200': '#9CD7E5',
        '300': '#6CB9D8',
        '400': '#3B94CB',
        '500': '#2A669F',
        '600': '#234B83',
        '700': '#1B3366',
        '800': '#14204A',
        '900': '#0C102E'
      },
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red' : '#BF2D2D',
      'yellow': {
        100: '#FFBA08',
        200: '#E3B84B',

      },
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

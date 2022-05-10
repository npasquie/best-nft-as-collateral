module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue':'#03071E', 
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'yellow':{
                  100:'#FFBA08',
                  200:'#E3B84B',

              },
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

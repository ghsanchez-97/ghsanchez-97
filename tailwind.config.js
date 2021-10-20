module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'vw-2': '20vw',
      },
      colors: {
        'primary': '#FF0909',
        'secondary': '#32453E',
        'tercer': '#F16529'
      },
      margin: {
        '1/1': '20%',
        '1/2': '50%',
        '1/3': '25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

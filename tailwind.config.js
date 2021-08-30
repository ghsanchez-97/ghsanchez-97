module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'vw-2': '20vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif']
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#020203'
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}

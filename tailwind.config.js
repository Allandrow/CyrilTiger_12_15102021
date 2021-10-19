module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif']
    },
    extend: {
      backgroundColor: { dark: '#020203' }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.writing-vert': {
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }
      })
    }
  ]
}

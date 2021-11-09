module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif']
    },
    extend: {
      backgroundColor: { dark: '#020203', primary: '#FF0000', secondary: '#282D30' },
      textColor: { primary: '#FF0101', secondary: '#282D30' },
      width: { icon: '60px' },
      height: { icon: '60px' }
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

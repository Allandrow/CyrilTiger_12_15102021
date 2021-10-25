module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif']
    },
    extend: {
      backgroundColor: { dark: '#020203' },
      textColor: { primary: '#FF0101' },
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

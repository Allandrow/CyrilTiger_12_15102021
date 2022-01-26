module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif']
    },
    extend: {
      backgroundColor: {
        dark: '#020203',
        primary: '#FF0101',
        secondary: '#282D30',
        barRed: '#E60000'
      },
      textColor: { primary: '#FF0101', secondary: '#282D30' },
      width: { icon: '60px' },
      height: { icon: '60px' },
      fontSize: { xxs: '10px' }
    },
    screens: {
      xl: '1280px',
      xxl: '1440px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities(
        {
          '.writing-vert': {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          },
          '.dashboard-height': {
            minHeight: 'calc(100vh - 6rem)'
          }
        },
        ['responsive']
      )
    }
  ]
}

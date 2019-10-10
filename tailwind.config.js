module.exports = {
  theme:  {
    extend: {
      screens: {
        'xs': '320px',
      },
      minWidth: theme => ({
        'sm': theme('screens.xs'),
      }),
      maxWidth: {
        '7xl': '80rem',
      }
    }
  },
  variants: {},
  plugins: []
}

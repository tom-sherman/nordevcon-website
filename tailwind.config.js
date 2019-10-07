module.exports = {
  theme:  {
    extend: {
      screens: {
        'xs': '320px',
      },
      minWidth: theme => ({
        'sm': theme('screens.xs'),
      }),
    }
  },
  variants: {},
  plugins: []
}

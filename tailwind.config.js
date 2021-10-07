const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      },
      screens: {
        xs: "320px"
      },
      minWidth: theme => ({
        sm: theme("screens.xs")
      }),
      maxWidth: {
        "7xl": "80rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/custom-forms")]
};

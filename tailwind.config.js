module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      minWidth: (theme) => ({
        sm: theme("screens.xs"),
      }),
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};

const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./index.html",
    "./survey.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,

      primary: colors.lightBlue,
      secondary: colors.emerald
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/bg.jpg')",
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

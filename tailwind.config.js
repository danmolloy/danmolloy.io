const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [  /* 'Roboto Mono', */ 'Space Mono', 'Inconsolata', 'Rubik', 'Poppins', 'Nunito', ...defaultTheme.fontFamily.serif],
        display: [ /* '"Press Start 2P"', */ 'SilkScreen', 'Rubik', 'Nunito', ...defaultTheme.fontFamily.serif]

      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        /* 'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.3xl') }, */
        'p': { fontSize: theme('fontSize.xl') },
      })
    })
  ]
}


/** @type {import('tailwindcss').Config} */
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
        sans: [ 'var(--font-raleway)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-inconsolata)',...defaultTheme.fontFamily.sans]
            },
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


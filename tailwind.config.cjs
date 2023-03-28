/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(25%)',
            opacity: 0
          },
          "100%": {
            transform: 'translateY(0%)',
            opacity: 1
          }
        },
      },
      transitionTimingFunction: {
        'wiggle': 'cubic-bezier(.32,2,.55,.27)'
      }
    },

  },
  plugins: [],
}

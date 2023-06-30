module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffaf0',
          100: '#ffefdb',
          200: '#fedc94',
          300: '#fcd180',
          400: '#fbc54b',
          500: '#faa81a',
          600: '#e69b00',
          700: '#b57c00',
          800: '#7f5800',
          900: '#4f3600',
        }
      }
    }
  },
  plugins: [require("daisyui")],
}


const { createThemes } = require('tw-colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        primary: '#9400D3',
        secondary: 'darkblue',
        background: '#dedede',
      },
      dark: {
        primary: '#9400D3',
        secondary: 'red',
        background: '#1c1c1c',
      },
    }),
  ],
};

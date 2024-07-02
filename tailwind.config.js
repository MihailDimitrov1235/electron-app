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
        background: '#f0f0f0',
        backgroundDark: '#dedede',
        backgroundDarker: '#cccccc',
        text: '#000000',
        lightText: '#111111',
      },
      dark: {
        primary: '#9400D3',
        secondary: 'red',
        background: '#374151',
        backgroundDark: '#1F2937',
        backgroundDarker: '#111827',
        text: '#ffffff',
        lightText: '#eeeeee',
      },
    }),
  ],
};

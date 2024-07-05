const { createThemes } = require('tw-colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage: {
        'login-bg': "url('../../img/login-bg.jpg')",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: '#3a0ca3',
        secondary: '#b5179e',
        contrast: '#4cc9f0',
        background: {
          main: '#e0e1dd',
          dark: '#d5d6d2',
          light: '#e9ebe6',
        },
        text: {
          main: '#000000',
          primary: '#ffffff',
          light: '#111111',
        },
        devider: '#aaaaaa',
      },
      dark: {
        primary: '#3a0ca3',
        secondary: '#b5179e',
        contrast: '#4cc9f0',
        background: {
          main: '#0B1622', // 0d1b2a
          dark: '#101D2D', // 1b263b 132032
          light: '#415a77',
        },
        text: {
          main: '#ffffff',
          primary: '#ffffff',
          light: '#eeeeee',
        },
        devider: '#415a77',
      },
    }),
  ],
};

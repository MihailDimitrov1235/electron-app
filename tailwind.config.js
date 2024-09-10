const { createThemes } = require('tw-colors');
const colors = require('tailwindcss/colors');

const defaultColors = {
  watching: '#338543',
  completed: '#2D4276',
  onHold: '#C9A31F',
  dropped: '#832F30',
  planToWatch: '#747474',
  score: colors.yellow[400],
  skeleton: colors.gray[500],
};

const primaryThemeColors = {
  primary: '#7247C7', // #7247C7 #3a0ca3
  secondary: '#b5179e',
  contrast: '#4cc9f0',
  'primary-background': '#ffffff',
};

const lightThemeColors = {
  background: {
    main: '#e0e1dd',
    dark: '#d5d6d2',
    light: '#e9ebe6',
  },
  text: {
    main: '#000000',
    light: '#555555',
  },
  devider: '#aaaaaa',
};

const darkThemeColors = {
  background: {
    main: '#0B1622', // 0d1b2a
    dark: '#101D2D', // 1b263b 132032
    light: '#081118',
  },
  text: {
    main: '#ffffff',
    light: '#aaaaaa',
  },
  devider: '#415a77',
};

module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx,ejs}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
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
        ...defaultColors,
        ...primaryThemeColors,
        ...lightThemeColors,
      },
      dark: {
        ...defaultColors,
        ...primaryThemeColors,
        ...darkThemeColors,
      },
    }),
  ],
};

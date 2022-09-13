/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myGrayLight: '#ededed',
        myGray: '#dfdfdf',
        myGrayDark: '#c9c9c9',
        myWhite: '#fcfcfc',
        myBlack: 'rgba(26, 25, 26, 100%)',
        myBlackLight: 'rgb(66, 64, 66)',
        myOrangeText: 'rgb(213, 167, 115)',
        myOrangeTextHover: 'rgba(161, 126, 87, 100%)',
        myOrangeButton: 'rgb(169, 124, 80)',
        myOrangeButtonHover: 'rgb(148, 112, 75)',
        footerDisclaimer: 'rgb(107, 104, 107)',
      },
    },
  },
  plugins: [],
};

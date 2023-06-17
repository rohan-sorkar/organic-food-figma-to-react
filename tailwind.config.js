/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-dianne': '#274C5B',
      'acapulco': '#7EB693',
      'golden-sand': '#EFD372',
      'alto': '#D4D4D4',
      'alabaster': '#F9F8F8',
      'saltpan': '#EFF6F1',
      'abbey': '#525C60'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'yellowtail': ['Yellowtail', 'cursive']
    },
    extend: {
      fontSize: {
        'heading-1' : ['70px', {lineHeight: '82px', fontWeight: '800'}],
        'heading-2' : ['50px', {lineHeight: '59px', fontWeight: '800'}],
        'heading-3' : ['40px', {lineHeight: '47px', fontWeight: '800'}],
        'heading-4' : ['35px', {lineHeight: '41px', fontWeight: '800'}],
        'heading-5' : ['30px', {lineHeight: '35px', fontWeight: '800'}],
        'heading-6' : ['25px', {lineHeight: '29px', fontWeight: '800'}],
        'body': ['18px', {lineHeight: '29.77px', fontWeight: '400'}],
        'quotes': ['20px', {lineHeight: '33px', fontWeight: '700'}]
      }
    },
  },
  plugins: [],
}
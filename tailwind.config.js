module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E1306C',
          secondary: '#FCAF45',
          neutral: '#777777',
          error: '#e12147',
          'base-100': '#ffffff',
        },
      },
      //   "dark",
    ],
  },
  plugins: [require('daisyui')],
}

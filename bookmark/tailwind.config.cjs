/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      screens: {
        xs: '500px',
        xss: '350px',
      },
      backgroundImage: {
        heroImage: 'url("src/assets/illustration-hero.svg")',
        dots: 'url("src/assets/bg-dots.svg")',
      },
    },
  },
  plugins: [],
}

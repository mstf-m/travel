/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '550px',
          md: '700px',
          lg: '800px',
          xl: '1000px',
          '2xl': '1200px',
        },
        center: true
      },

      fontFamily:{
        body:['Montserrat']
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '700px',
        'custom-con': '1026px',

      },
      height:
      {
        'custom':'90%',
        'custom2':'600px',
      },
      width:
      {
        'custom': '700px'
      }
    },
  },
  plugins: [],
}


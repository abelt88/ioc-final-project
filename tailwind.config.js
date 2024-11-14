/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        clay: '#745751',
        cream: '#F5EBE2',
        olive: '#A29572',
        herb: '#BAB7A6',
        sand: '#B59C7D',
        forest: '#696F55',
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Italiana", "serif"],
        
      }
    },
  },
  plugins: [],
}

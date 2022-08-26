/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fill, minmax(280px, 1fr))'
      }
    },
  },
  plugins: [],
}

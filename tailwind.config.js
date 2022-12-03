/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#064663',
        'primaryLight': '#064659',
        'secondary': '#22A39F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["pages/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,tsx,ts,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {}, 
  },
  plugins: [],
}

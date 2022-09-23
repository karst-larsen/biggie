/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lora': 'Lora, serif',
      'Manrope': 'Manrope, sans-serif',
    },
    extend: {
      height: {
        '136': '34rem'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "#2D3648",
        lightGray: "#CBD2E0"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


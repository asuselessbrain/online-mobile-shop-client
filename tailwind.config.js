/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
      },
    },
    fontFamily:{
      Cinzel: ["Cinzel", "serif"]
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#161A30',
      'sub_color_1': '#EEF5FF',
      'highlight_color': '#FF444A',
      
    },
    extend:  {
      fontFamily : {
        Nunito : "'Nunito Sans', sans-serif;",
        Allura : "'Allura', cursive;"
      }
    }
  },
  plugins: [require("daisyui")],
}


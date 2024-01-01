/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "kirmizi3":"#FF0000",
        "kirmizi1":"#d40028",
        "kirmizi2":"#c30022",
        "yesil1":"#036f3e",
        "yesil2":"#00a53c",
        "yesil3":"#13cc4e",
      }
    },
  },
  plugins: [],
}


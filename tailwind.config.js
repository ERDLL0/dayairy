/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: [
          "'Patrick Hand'",
          "'Indie Flower'",
          "'Shadows Into Light'",
          "'Gloria Hallelujah'",
          "cursive",
        ],
      },
    },
  },
      colors: {
        softBlue: "#a3cef1",
        softPink: "#f6cacf",
        softGreen: "#a8d5ba",
        softYellow: "#f7f3a9"
      }
    },
  },
  plugins: [],
}

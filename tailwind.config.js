/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitterWhite: "#E7E9EA",
        twitterBlue: "#308CD8",
        twitterBorder: "#2F3336",
        twitterLightGray: "#71767B",
        twitterDarkGray: "#17181C",
      },
    },
  },
  plugins: [],
};

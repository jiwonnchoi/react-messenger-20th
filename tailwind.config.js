/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Chat_BG: "#378DEF",
        Alert: "ff000000",
      },
      fontFamily: {
        "SF-Pro": ["SF-Pro"],
        "SF-Pro-Text-Regular": ["SF-Pro-Text-Regular"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Chat_BG: "#378DEF",
        Alert: "#ff0000",
        Gray100: "#F9FAFB",
        Gray200: "#F2F4F6",
        Gray300: "#DFE2E5",
        Gray400: "#B0B8C1",
        Gray500: "#8B95A1",
        Gray600: "#6B7684",
        Gray700: "#4E5968",
        Gray800: "#333D48",
        Gray900: "#121212",
      },
      fontFamily: {
        "SF-Pro": ["SF-Pro"],
        "SF-Pro-Text-Regular": ["SF-Pro-Text-Regular"],
        "SF-Pro-Text-Bold": ["SF-Pro-Text-Bold"],
      },
    },
  },
  plugins: [],
};

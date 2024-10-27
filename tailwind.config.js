/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chineseBlack: "#141414",
        graniteGray: "#666666",
        gray: "#818181",
        argent: "#bfbfbf",
        ksuPurple: "#0f061b",
        plumpPurple: "#1a1033",
        customOrange: "#FFA500",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

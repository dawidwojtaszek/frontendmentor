/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "575px",
    },
    colors: {
      veryLightGray: "hsl(0, 0%, 98%)",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlueDark: "hsl(234, 39%, 85%)",
      darkGrayishBlueDark: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlueDark: "hsl(233, 14%, 35%)",
      veryDarkGrayishBlueDark2: "hsl(237, 14%, 26%)",
      brightBlue: "hsl(220, 98%, 61%)",
      gradientFrom: "hsl(192, 100%, 67%)",
      gradientTo: "hsl(280, 87%, 65%)",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};

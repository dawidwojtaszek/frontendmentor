/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "770px",
      lg: "1440px",
    },
    colors: {
      brightRed: "hsl(12, 88%, 59%)",
      darkBlue: "hsl(228, 39%, 23%)",
      darkGrayishBlue: "hsl(227, 12%, 61%)",
      veryDarkBlue: "hsl(233, 12%, 13%)",
      veryPaleRed: "hsl(13, 100%, 96%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "#fff",
      black: "#000",
      testimonialsBackground: "#eeeeef",
      errorRed: "#cd0a15",
      hoverOrange: "#ef876e",
    },
    extend: {
      backgroundImage: {
        "mobile-main-pattern": "url('../public/images/bg-tablet-pattern.svg')",
        "mobile-simlify-pattern":
          "url('../public/images/bg-simplify-section-mobile.svg')",
        "desktop-simlify-pattern":
          " url('../public/images/bg-simplify-section-desktop.svg')",
      },
      backgroundSize: {
        mobile: "top_-100px_right_-100px_lenght:448px_448px",
      },
    },
  },
  plugins: [],
};

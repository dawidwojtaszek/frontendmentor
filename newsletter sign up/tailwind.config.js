/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      gradient: "#ff537b",
      darkSlateGrey: "hsl(234, 29%, 20%)",
      charcoalGrey: "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      disply: ["Roboto", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 25px 40px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

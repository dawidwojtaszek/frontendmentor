/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      md: "740px",
    },
    colors: {
      lightRed: "hsl(0, 100%, 67%)",
      lightRedTransparent: "hsla(0, 100%, 67%,0.1)",
      orangeyYellow: "hsl(39, 100%, 56%)",
      orangeyYellowTransparent: "hsla(39, 100%, 56%,0.1)",
      greenTeal: "hsl(166, 100%, 37%)",
      greenTealTransparent: "hsl(166, 100%, 37%,0.1)",
      cobaltBlue: "hsl(234, 85%, 45%)",
      cobaltBlueTransparent: "hsl(234, 85%, 45%,0.1)",
      white: "hsl(0, 0%, 100%)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
      lightSlateBlue: "hsl(252, 100%, 67%)",
      lightRoyalBlue: "hsl(241, 81%, 54%)",
    },
    fontFamily: {
      disply: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

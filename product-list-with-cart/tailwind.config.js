/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose50: "hsl(20, 50%, 98%)",
        rose100: "hsl(13, 31%, 94%)",
        rose300: "hsl(14, 25%, 72%)",
        rose400: "hsl(7, 20%, 60%)",
        rose500: "hsl(12, 20%, 44%)",
        rose900: "hsl(14, 65%, 9%)",
      },
    },
  },
  plugins: [],
};

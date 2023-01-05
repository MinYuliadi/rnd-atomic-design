/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#575DFB",
      gray: {
        soft: "#EFF0FF",
        medium: "#AEB6D3",
      },
      dark: {
        primary: "#403F63",
        secondary: "#1C1C1C",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};

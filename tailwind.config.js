/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#63A876",
        "custom-light": "#F0EDEE",
        "custom-pink": "#FF69B4",
        "custom-bg": "#0D0D0D",
      },
      fontFamily: {
        "roboto-serif": ["Roboto Serif", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        standard: "18px",
      },
    },
  },
  plugins: [],
};

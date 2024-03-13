/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "868px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "dark-blue": "hsl(222, 20%, 22%)",
        "very-dark-blue-bg": "hsl(207, 26%, 17%)",
        "very-dark-blue-text": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans"],
      },
    },
  },
  plugins: [],
};
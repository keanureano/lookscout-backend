/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#151B28",
          900: "#1C2534",
          800: "#252D3C",
          600: "#2C3444",
          400: "#333B48",
          300: "#2E3545",
          50: "#5F6D7E",
        },
        neutral: {
          800: "#A5ACBA",
          700: "#DAE0E6",
          200: "#F9F9F9",
          50: "#FAFBFC",
        },
        primary: {
          600: "#437EF7",
        },
      },
      borderRadius: {
        sm2: "0.3125rem",
        lg2: "0.625rem",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm2: "0.9375rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

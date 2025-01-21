/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #004E5C, #076879, #889F80, #FFD387)",
      },
    },
    fontFamily: {
      family: ["Montserrat", "serif"],
    },
  },
  plugins: [],
};

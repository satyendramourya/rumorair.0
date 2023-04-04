/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: "rgb(124, 124, 124)",
      },
      boxShadow: {
        grayish: "0 0 10px 0 rgb(124, 124, 124)",
      },
    },
  },
  plugins: [],
};

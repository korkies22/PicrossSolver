/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Libre_Baskerville"],
    },
  },
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  plugins: [],
};

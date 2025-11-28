/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter18: ["Inter 18pt", "sans-serif"],
        inter24: ["Inter 24pt", "sans-serif"],
      },
    },
  },
  plugins: [],
};

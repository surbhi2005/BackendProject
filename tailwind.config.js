/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {}, // You can extend the default theme here if needed
  },
  plugins: [],
}
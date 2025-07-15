/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'xl-yellow': '0 10px 15px -3px rgba(250, 204, 21, 0.4), 0 4px 6px -2px rgba(250, 204, 21, 0.2)',
      }
    },
  },
  plugins: [],
}
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inova': {
          'gold': '#b89a5e',
          'dark-gold': '#9d7f4a',
          'light-gold': '#d4b896',
          'blue': '#233e79',
          'dark-blue': '#1a2d5a',
          'light-blue': '#3a5fa8',
          'white': '#fffffe',
          'black': '#000000',
          'gray-dark': '#1a1a1a',
          'gray-medium': '#333333',
        }
      }
    },
  },
  plugins: [],
};

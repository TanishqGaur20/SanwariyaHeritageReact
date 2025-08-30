/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1B3B36',
          secondary: '#D4AF37',
          'white-100': '#FFFFFF',
        },
        fontFamily: {
          'miracle': ['Miracle Personal use', 'serif'],
          'helvetica': ['Helvetica Neue', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
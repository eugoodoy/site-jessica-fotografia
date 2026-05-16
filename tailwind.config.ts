/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Inter"', 'sans-serif'],
        },
        colors: {
          cream: '#f7f3ef',
          warm: {
            50: '#fdfbf9',
            100: '#f7f3ef',
            200: '#ece5dc',
            300: '#ddd0c2',
            400: '#c9b8a4',
            500: '#b5a08a',
            600: '#9e8770',
            700: '#826d58',
            800: '#6b5846',
            900: '#584838',
          },
          dark: {
            DEFAULT: '#3d3228',
            light: '#5c4d3f',
            softer: '#7a6a5a',
          }
        },
      },
    },
    plugins: [],
  }
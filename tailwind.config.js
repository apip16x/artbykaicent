/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#F4F4F4',
        pink: '#D7BABC',
        'deep-blue': '#2E188D',
        maroon: '#6D3B2B',
        'light-blue': '#8997B7',
        black: '#202020',
        canvas: '#F4F4F4',
        ink: '#2E188D',
        'brand-beige': '#F4F4F4',
        'brand-midnight': '#202020',
      },
      fontFamily: {
        display: ['Averia Libre', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

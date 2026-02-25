/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          80: 'var(--dark-80)',
          100: 'var(--dark-100)',
          120: 'var(--dark-120)',
        },
        eclipse: {
          80: 'var(--eclipse-80)',
          100: 'var(--eclipse-100)',
          120: 'var(--eclipse-120)',
        },
        blossom: {
          80: 'var(--blossom-80)',
          100: 'var(--blossom-100)',
          120: 'var(--blossom-120)',
        },
        red: {
          80: 'var(--red-80)',
          100: 'var(--red-100)',
          120: 'var(--red-120)',
        },
        pearl: {
          80: 'var(--pearl-80)',
          100: 'var(--pearl-100)',
          120: 'var(--pearl-120)',
        },
        grey: {
          80: 'var(--grey-80)',
          100: 'var(--grey-100)',
          120: 'var(--grey-120)',
        },
      },
      fontFamily: {
        display: ['Averia Libre', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

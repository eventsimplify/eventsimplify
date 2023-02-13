/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#4F4CEE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Cabinet Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

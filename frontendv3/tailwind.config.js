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
        primary_darkest: '#0022BA',
        primary_dark: '#231FEA',
        primary_default: '#4F4CEE',
        primary_light: '#7F7DF3',
        primary_lightest: '#DADAFB',
        text_dark: '#060609',
        text_default: '#1B1B25',
        text_light: '#5C5C5F',
        text_lightest_sec: '#DDDDDE',
        text_lightest: '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Cabinet Grotesk', 'sans-serif'],
      },
      fontSize: {
        title_1: '72px',
        title_2: '64px',
        heading_1: '48px',
        heading_2: '24px',
        subheading_1: '18px',
        subheading_2: '16px',
        subheading_3: '14px',
        subheading_4: '12px',
        subheading_5: '10px',
      },
    },
  },
  plugins: [],
};

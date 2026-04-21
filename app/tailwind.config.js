/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        academy: {
          green: '#0B3D2E',
          gold: '#D4AF37',
          violet: '#3F1D7A',
        },
      },
    },
  },
  plugins: [],
};

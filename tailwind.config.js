/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          600: '#8c5e47',
          800: '#5c3d2e',
          900: '#43281c',
        }
      }
    },
  },
  plugins: [],
}

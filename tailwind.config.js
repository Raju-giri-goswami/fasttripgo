/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd5ff',
          300: '#8cbafe',
          400: '#5895fc',
          500: '#3174f6',
          600: '#1f57da',
          700: '#1c44b0',
          800: '#1c3a90',
          900: '#1c3576',
          950: '#142050',
        },
        secondary: {
          50: '#effcf9',
          100: '#d7f5f0',
          200: '#b3ebe3',
          300: '#82dbd0',
          400: '#49c2b7',
          500: '#2aa49c',
          600: '#1f8683',
          700: '#1e6c6b',
          800: '#1d5655',
          900: '#1c4847',
          950: '#0a2a2a',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc271',
          400: '#ff9c36',
          500: '#ff7d0d',
          600: '#f85c00',
          700: '#cf4000',
          800: '#a63300',
          900: '#872c00',
          950: '#491300',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
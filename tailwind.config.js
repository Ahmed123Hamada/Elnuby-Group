/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fbd7a8',
          300: '#f8bb71',
          400: '#f59e3a',
          500: '#f2851a',
          600: '#e36a0f',
          700: '#bc4f0e',
          800: '#963f12',
          900: '#7a3513',
          950: '#421a08',
        },
        elnuby: {
          orange: '#EC8823',
          darkOrange: '#D67A1F',
          lightOrange: '#F4A261',
          cream: '#FEF7ED',
          dark: '#1F2937',
          gray: '#6B7280',
          lightGray: '#F3F4F6',
          white: '#FFFFFF',
          black: '#000000',
        },
        brand: {
          primary: '#EC8823',
          secondary: '#1F2937',
          accent: '#F4A261',
          background: '#FEF7ED',
          text: '#1F2937',
          'text-light': '#6B7280',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
} 
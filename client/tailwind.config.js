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
          red: '#ff0000',
          dark: '#000000',
          gray: '#333333',
        }
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) rotateX(2deg)' },
        },
        slideIn: {
          'from': { transform: 'translateX(-100px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


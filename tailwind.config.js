/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'card-enter': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.9) rotateX(20deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1) rotateX(0deg)',
          },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.1)', opacity: '0.4' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-5px) translateX(2px)' },
          '50%': { transform: 'translateY(-10px) translateX(-2px)' },
          '75%': { transform: 'translateY(-5px) translateX(2px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1.1)' },
          '25%': { transform: 'rotate(5deg) scale(1.15)' },
          '75%': { transform: 'rotate(-5deg) scale(1.15)' },
        },
      },
      animation: {
        'card-enter': 'card-enter 1s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        tilt: 'tilt 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
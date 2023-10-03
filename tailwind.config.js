/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xs: '480px',
      tn: '290px'
    },
    extend: {
      keyframes: {
        'c-pulse': {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'c-pulse': 'c-pulse 2s linear infinite'
      }
    }
  },
  plugins: []
};

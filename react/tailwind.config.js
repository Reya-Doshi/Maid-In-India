/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'netflix-zoom': 'netflixZoom 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
      },
      keyframes: {
        netflixZoom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '15%': { transform: 'scale(1)', opacity: '1', textShadow: '0 0 20px rgba(138,3,3,0.5)' },
          '70%': { transform: 'scale(1.1)', opacity: '1', textShadow: '0 0 40px rgba(138,3,3,0.6), 0 0 80px rgba(138,3,3,0.4)' },
          '100%': { transform: 'scale(3)', opacity: '0', filter: 'blur(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

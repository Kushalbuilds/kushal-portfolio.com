/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
        vt323: ['VT323', 'monospace'],
        // Add 'sans' to ensure default sans font is available
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Add cyan color to ensure it's available for text-cyan-400
        'cyan': {
          400: '#22d3ee',
        },
        'dark': '#1c1917',
        'dark-blue': '#292524',
        'accent-blue': '#f97316',
        'accent-purple': '#eab308',
        'accent-pink': '#f43f5e',
        'accent-orange': '#f97316',
        'accent-emerald': '#10b981',
        'terminal-green': '#eab308',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 230, 246, 0.5), 0 0 10px rgba(0, 230, 246, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 230, 246, 0.8), 0 0 20px rgba(0, 230, 246, 0.4)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '31%, 33%, 35%, 37%, 39%, 41%': { transform: 'translateX(-2px)' },
          '30%, 32%, 34%, 36%, 38%, 40%': { transform: 'translateX(2px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 8px rgba(249, 115, 22, 0.6), 0 0 15px rgba(249, 115, 22, 0.3)',
        'neon-purple': '0 0 8px rgba(234, 179, 8, 0.6), 0 0 15px rgba(234, 179, 8, 0.3)',
        'neon-pink': '0 0 8px rgba(244, 63, 94, 0.6), 0 0 15px rgba(244, 63, 94, 0.3)',
        'neon-orange': '0 0 8px rgba(249, 115, 22, 0.6), 0 0 15px rgba(249, 115, 22, 0.3)',
        'neon-emerald': '0 0 8px rgba(16, 185, 129, 0.6), 0 0 15px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}

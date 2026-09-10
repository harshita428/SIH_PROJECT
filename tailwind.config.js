/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EAE1D2',
          400: '#D8C9B1',
          500: '#BCA787',
        },
        navy: {
          950: '#040B16',
          900: '#071324',
          800: '#0A192F',
          700: '#112240',
          600: '#1D3557',
          500: '#2C4F7C',
        },
        saffron: {
          50: '#FFF8F1',
          100: '#FEEDDD',
          200: '#FDD5B5',
          300: '#FBAE75',
          400: '#F98638',
          500: '#FF7722',
          600: '#E65100',
          700: '#C23D00',
        },
        gold: {
          50: '#FDFBF4',
          100: '#FAF4DC',
          200: '#F4E5B1',
          300: '#E8CE7D',
          400: '#D4AF37',
          500: '#C59B27',
          600: '#A47E1B',
          700: '#7E5F12',
        },
        'ashoka-green': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#138808',
          600: '#0E6D06',
          700: '#0B5505',
        },
        emerald: {
          800: '#064E3B',
          900: '#022C22',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        heading: ['Rozha One', 'Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-reverse-slow': 'spin-reverse 60s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'heritage': '0 10px 30px -10px rgba(10, 25, 47, 0.08), 0 4px 6px -2px rgba(10, 25, 47, 0.04)',
        'heritage-hover': '0 20px 40px -12px rgba(230, 81, 0, 0.14), 0 8px 16px -4px rgba(10, 25, 47, 0.06)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.28)',
        'saffron-glow': '0 0 25px rgba(230, 81, 0, 0.35)',
      }
    },
  },
  plugins: [],
};

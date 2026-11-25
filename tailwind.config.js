/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        campus: {
          bg: '#FEF6E9',
          cream: '#FFFDF7',
          card: '#FFF9EE',
          surface: '#FFFFFF',
          border: '#E8E1D5',
          borderDark: '#18181B',
          text: '#18181B',
          muted: '#6B7280',
          yellow: '#FDB94E',
          yellowHover: '#EAA539',
          yellowLight: '#FFF3D6',
          purple: '#8462F6',
          purpleLight: '#ECE6FF',
          purpleDark: '#623EEA',
          peach: '#FFD5C2',
          peachDark: '#FF5A26',
          mint: '#C7F5D4',
          mintDark: '#0DA959',
          rose: '#FFD1DF',
          roseDark: '#E93D7D',
          blobGreen: '#84C69B',
          blobPurple: '#B8A4FC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fredoka"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #18181B',
        'brutal': '3px 3px 0px 0px #18181B',
        'brutal-lg': '5px 5px 0px 0px #18181B',
        'soft-card': '0 4px 20px -2px rgba(24, 24, 27, 0.05)',
      },
      borderRadius: {
        'card': '20px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}

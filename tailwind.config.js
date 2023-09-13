/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E3A5D',
        secondary: '#03B5CF',
        background: '#1A1A1A'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Active le mode sombre via class
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#dc2626',
        accent: '#f59e0b',
        dark: '#1f2937',
        light: '#f8fafc'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow';
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#4969DB',
          light: '#6481D9',
          dark: '#7064D9'
        }
      },
      boxShadow: {
        'box-shadow-inset': 'inset 20px 20px 20px #6481D9',
        'box-shadow-inset-reverse': 'inset -20px 20px 20px #6481D9',
        'box-shadow-inset-negative': 'inset 20px -20px 20px #6481D9',
        'box-shadow-inset-negative-reverse': 'inset -20px -20px 20px #6481D9',
      },
      textShadow: {
        purple: '1px 1px #4969DB'
      }
    },
  },
  plugins: [textShadow],
}


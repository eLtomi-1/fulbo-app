/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      screens: {
        'mb': '470px',
        // mobile
        'mbs': '400px',
        // mobile small
      },
      colors: {
        'orange': '#D97830',
        'ligthviolet': '#F7F7F7',
        'gray': '#f2f4f7',
        'semiblack': '#636363',
      },
    },
  },
  plugins: [],
}


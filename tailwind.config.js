/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
    },
    extend: {
      screens: {
        'mb': '440px',
        'mbx': '490px',
        // mobile
        'mbs': '400px',
        // mobile small
      },
      colors: {
        'ligthviolet': '#F3F1F7',
        'gray': '#f2f4f7',
        'semiblack': '#213547',
      },
    },
  },
  plugins: [],
}


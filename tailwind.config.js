/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1620',
        card: '#112531',
        txt: '#e7f0f4',
        accent: '#6699cc',
        muted: '#9fb5bf',
        line: '#2a5363',
        'header-bg': '#213F48',
        'input-bg': '#0e1f2b',
        'button-bg': '#1e3b47',
        'button-hover': '#234454',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'strathmore-yellow': '#cfa052',
        'strathmore-blue': '#02338D',
        'strathmore-yellow-light': '#CC9C4A',
      },
    },
  },
  plugins: [],
}


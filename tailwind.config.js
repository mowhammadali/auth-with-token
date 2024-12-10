/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6366f1",
        "light": "#e2e8f0",
        "dark": "#1e293b"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


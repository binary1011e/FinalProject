/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",      // all of your app/ files
      "./src/components/**/*.{js,ts,jsx,tsx}" // and your components folder
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          accent: "#4F46E5", // feel free to change
        },
        fontFamily: {
          sans: ['system-ui', 'sans-serif'],
        },
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
  
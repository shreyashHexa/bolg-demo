/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      // Enabling smooth scroll behavior globally
      scrollBehavior: {
        smooth: 'smooth', // This will apply the smooth scroll behavior
      },
    },
  },
  plugins: [],
}

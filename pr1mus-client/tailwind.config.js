/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all file types used in your project
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small devices (portrait phones)
        'sm': '640px', // Small devices (phones)
        'md': '768px', // Medium devices (tablets)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (large desktops)
        '2xl': '1536px' // Extra extra large devices (larger desktops)
      },
    },
  },
  plugins: [],
}



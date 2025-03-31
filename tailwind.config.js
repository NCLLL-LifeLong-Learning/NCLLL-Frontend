/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '440px',  // Custom xxs breakpoint
        'xs': '640px',   // Default xs breakpoint
        'sm': '768px',   // Default sm breakpoint
        'md': '1024px',  // Default md breakpoint
        'lg': '1280px',  // Default lg breakpoint
        'xl': '1536px',  // Default xl breakpoint
        'xxl': '1800px', // Custom xxl breakpoint
      },
    },
  },
  plugins: [],
}
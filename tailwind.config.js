/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '42.5rem',  // Custom xxs breakpoint
        'xs': '62.5rem',   // Default xs breakpoint
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
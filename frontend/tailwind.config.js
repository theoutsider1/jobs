/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Customize your colors here
        primary: '#debdb2',  // custom primary color
        secondary: '#d5b19c',
        third: '#f6ebe7',
        fourth : '#cfa59a'
      },
      
    },
  },
  plugins: [],
}


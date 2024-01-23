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
        fourth : '#cfa59a',
        fifth: '#fbf5f1',
        success: '#4ADE80',
        darkk: '#bb877a',
        bright: '#f3e2d6',
      },
      boxShadow: {'shadow': 'inset 0 -90px 30px 0 rgba(70, 70, 70, 0.2), inset 0 -90px 60px 0 rgba(70, 70, 70, 0.2)'},
      backgroundImage:
         {
           'shape': "url('/src/assets/shape.svg)",
         }
    },
  },
  plugins: [],
}


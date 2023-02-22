/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'your-image': "url('https://img.freepik.com/premium-vector/multicolored-abstract-background_23-2148463672.jpg?w=740')",
      }),
    },
  },
  plugins: [],
}

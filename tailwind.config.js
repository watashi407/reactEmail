/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'your-image': "url('https://i.pinimg.com/564x/48/6f/b2/486fb2c2d71b229f0c120ce8d5a66a4b.jpg')",
      }),
    },
  },
  plugins: [],
}

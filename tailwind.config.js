module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bebas Neue', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
        accent: ['Poetsen One', 'cursive'],
      },
    },
  },  // <-- close theme object here
  plugins: [],
};  // <-- close main object here

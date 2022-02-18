module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#03969C',
        'secondary': '#AF4D98'
      },
      height: {
        lg: '300px',
        xl: '600px'
      },
      backgroundImage: {
        'hero-home': "url('/images/lake-and-mountain.jpg')"
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

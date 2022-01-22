module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          backgroundImage: {
              'pattern': "url('/img/pattern.png')",
              'footer-texture': "url('/img/footer-texture.png')",
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
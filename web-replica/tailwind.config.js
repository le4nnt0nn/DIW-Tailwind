module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          backgroundImage: theme => ({
              'pattern': "url('./img/pattern.png')"
          }),
          fontFamily: theme =>({
            symbols: ['WebSymbolsRegular'],
            bebas: ['BebasNeue'],
          }),
          colors: theme => ({
            'azul-logo':'#37bcf9',
            'hover-logo':'#ccc',
          }),
          height: {
            'header':'70px',
          },
          width: {
            'wrapper':'1250px',
          },
          margin: {
            'wrapper':'0px auto',
          }
      },
    },
    variants: {
      extend: {
        
      },
    },
    plugins: [],
}
module.exports = {
    theme: {
      extend: {
          keyframes: {
            fromBellow: {
              '0%, 100%': { transform: 'translate(0%)'},
              '50%': { transform: 'translate(200%)'},
            },
            showIcon: {
              'from': { transform: 'translate(-200%)' },
              'to': { transform: 'translate(0%)' }
            },
            showCategory: {
              'from': { transform: 'translate(-300%)', color: 'black' },
              'to': { transform: 'translate(0%)', color: 'white' }
            },
            showDescription: {
              'from': { transform: 'translate(-300%)', color: 'black' },
              'to': { transform: 'translate(0%)' }
            }
          },
          animation: {
            'rotateGear': 'spin 2s linear infinite' ,
            'showIconCard':'showIcon 300ms linear',
            'showCategoryCard':'showCategory 400ms linear',
            'showDescriptionCard':'showDescription 400ms linear'
          },
          backgroundImage: theme => ({
              'pattern': "url('../img/pattern.png')",
              'banner': "url(../img/bakbaner.png)"
          }),
          fontFamily: {
            symbols: ['WebSymbolsRegular'],
            bebas: ['BebasNeue'],
          },
          colors: {
            'azul-logo':'#37bcf9',
            'azul-category': '00538c',
            'hover-logo':'#ccc',
          },
          height: {
            'header':'70px',
          },
          width: {
            'wrapper':'1250px',
          },
          margin: {
            'wrapper':'0px auto',
          },
          lineHeight: {
            'menu': '70px',
            'icon': '110px'
          }
      },
    },
    variants: {
      animation: ['responsive', 'hover', 'group-hover'],
      animate: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
    }
}
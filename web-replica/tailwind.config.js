module.exports = {
    theme: {
      extend: {
          keyframes: {
            fromBellow: {
              '0%, 100%': { transform: 'translateY(0%)'},
              '50%': { transform: 'translateY(200%)'},
            },
            fromRight: {
              'from': { transform: 'translateX(200%)' },
              'to': { transform: 'translateX(0%)' }
            },
            showIcon: {
              'from': { transform: 'translateY(-200%)' },
              'to': { transform: 'translateY(0%)' }
            },
            showCategory: {
              'from': { transform: 'translateY(-300%)', color: 'black' },
              'to': { transform: 'translateY(0%)', color: 'white' }
            },
            showDescription: {
              'from': { transform: 'translateX(-300%)', color: 'black' },
              'to': { transform: 'translateX(0%)' }
            },
            backBanner: {
              '0%': { backgroundPosition: '0px 0px' },
              '100%': {backgroundPosition: '-200px -200px' }
            },
            showText: {
              '0%': { transform: 'translate(-600%) scale(5,5)' },
              '50%': { transform: 'translate(600%) scale(5,5)', opacity: 1 },
              '75%': { transform: 'translate(-600%)', dropShadow: 'none', color: 'transparent', opacity: 0 },
              '100%': { transform: 'translate(0%) scale(1,1)', dropShadow: 'drop-shadow-md', color: 'white', opacity: 1 }
            },
            blink: {
              '0%': { border: '10px solid #37bcf9' },
              '25%': { border: '10px solid green' },
              '50%': { border: '10px solid yellow' },
              '75%': { border: '10px solid white' },
              '100%': { border: '10px solid #37bcf9' }
            }
          },
          animation: {
            'fromBellowLogo':'fromBellow 500ms linear',
            'fromRightLogo':'fromRight 300ms linear',
            'rotateGear': 'spin 2s linear infinite' ,
            'showIconCard':'showIcon 300ms linear',
            'showCategoryCard':'showCategory 400ms linear',
            'showDescriptionCard':'showDescription 400ms linear',
            'backBannerBan':'backBanner 10s linear',
            'showTextBan':'showText 10s linear',
            'blinkBlog':'blink 10s infinite linear'
          },
          backgroundImage: theme => ({
              'pattern': "url('../img/pattern.png')",
              'banner': "url(../img/bakbaner.png)",
              'lateral':"url('../img/pxgray.png')"
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
            'footerWrap':'370px'
          },
          width: {
            'wrapper':'1250px',
            'articles':'860px'
          },
          margin: {
            'wrapper':'0px auto',
          },
          lineHeight: {
            'menu': '70px',
            'icon': '110px',
            'h3': '45px',
            'blog':'100px'
          },
          MinHeight: {
            'lateral': '1200px',
          }
      },
    },
    variants: {
      animation: ['responsive', 'hover', 'group-hover'],
      animate: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
    }
}
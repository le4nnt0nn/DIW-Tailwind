module.exports = {
    theme: {
      extend: {
          screens: {
            '3000':{'max':'3000px'},
            '1250':{'max':'1250px'},
            '1080':{'max':'1080px'},
            '970':{'max':'970px'},
            '925':{'max':'925px'},
            '899':{'max':'899px'},
            '799':{'max':'799px'},
            '724':{'max':'724px'},
            '660':{'max':'660px'},
            '475':{'max':'475px'},
            'xl':{'max':'1280px'},
            'lg':{'max':'1024px'},
            'md':{'max':'768px'},
            'sm':{'max':'600px'}
          },
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
            'azulLogo':'#37bcf9',
            'azulCategory': '00538c',
            'hoverLogo':'#ccc',
          },
          height: {
            'header':'70px',
            'footerWrap':'370px',
            'headerRespons':'120px'
          },
          width: {
            'wrapper':'80%',
            'articles':'65%',
            'article':'97%',
            'asideBox':'85%',
            'menuRespons':'440px',
            'bannerH1':'850px',
            'banner':'95.5%'
          },
          margin: {
            'wrapper':'0px auto',
            'cardRespons':'1.25%'
          },
          lineHeight: {
            'menu': '70px',
            'icon': '110px',
            'h3': '45px',
            'blog':'100px'
          },
          minHeight: {
            'lateral': '1200px',
            'asideBoxRespons':'140px',
            'lateralRespons':'auto'
          },
          marginLeft: {
            'overlay': '70px'
          },
          marginTop: {
            'overlayNeg':'-52px'
          }
      },
    },
    variants: {
      animation: ['responsive', 'hover', 'group-hover'],
      animate: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
    }
}
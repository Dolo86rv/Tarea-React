module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 36.25s linear 0s infinite',
        reavel:'reavel 1s both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        reavel: {
          '0%': { 
            opacity:'0',
            transform: 'translate3d(0px,100%,0px)'},
          '100%': { 
            opacity:'1',
            transform: 'none' },
        },
      },
      width: {
        'fit':'fit-content',
      },
      colors:{
        'turquee':'#3eb1c8',
        'bg_menu':'#212529',
        'c_text':'#27364b',
        'c_background':'#f6f8fc',
        'c_footer':'#002554',
        'bg_gray':'#6c757d',
        'bg_box':'#f4f4f7',
        'c_border':'#cbd4e1',
        'c_sea':'#3eb1c81a',
        'bg_gray2':'#eff3f8',
        'ashford':'#01426a',
        'service':'#c3d4e6',
        'c_box':'#8994a7',
        'darkfont':'#0f1a2a',
      }, 
      boxShadow: {
        '3xl': '0 0px 30px rgba(112, 144, 176, 0.2)',
      },
      fontFamily:{
        'Futura-Std':['Futura Std-Book'],
      },
      fontSize: {
        'xl':['32px','40px'],
        '1xl':['20px','21.6px'],
        '2sm':['24px','32px'],
         's': ['10px', {
            lineHeight: '16px',
          }],
      },
      margin: {
        '34': '140px',
      },
      letterSpacing: {
         widest: '.13em',
      },  
     backgroundImage:theme=>({
      'imagen_fondo':'url(./img/info-background.png)'
     })  
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'ssm':'330px',
      '1sm':'572px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 991px) { ... }
      '1lg':'1024px',
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }, 
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
 }



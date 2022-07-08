module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 36.25s linear 0s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontSize: {
        'sml': '0.625rem',
        'sm':'0.875rem',
      },
      colors:{
        'turquee':'#3eb1c8',
        'bg_menu':'#212529',
        'c_text':'#27364b',
        'c_background':'#f6f8fc',
        'c_footer':'#002554',
      }, 
      fontFamily:{
        'Futura-Std':['Futura Std-Book'],
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

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 991px) { ... }

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



module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 36.25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors:{
        'turquee':'#3eb1c8',
      }, 
      fontFamily:{
        'Futura-Std':['Futura Std-Book'],
      },  
     backgroundImage:theme=>({
      'imagen_fondo':'url(./img/info-background.png)'
     })  
    },
    
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
 }



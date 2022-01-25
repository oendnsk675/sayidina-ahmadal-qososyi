module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Open-Sans' : ["Open Sans"]
      },
      height: {
        'h-19' : '2.5rem'
      },
      colors: {
        'primary' : '#ECE8E1',
        'secondary' : '#E74252',
        'color1' : '#111111',
        'color2' : '#3C423D',
        'color3' : '#0F1923',
      },
      spacing: {
        '11/23': '47%'
      },
      screens: {
        'xsm': {'max': '383px'},
        'smx': {'max': '530px'},
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': {'max': '767px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

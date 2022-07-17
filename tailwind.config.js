/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:
      {
        'background-gray':'#EFEFEF', 
      },
      screens: {
        'iphonex': '365px',
        // => @media (min-width: 365px) { ... }
        'iphoneSE': '380px',
        // => @media (min-width: 375px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      height: {
        
      },
      fontFamily: {
        'Comforter':"'Comforter','cursive'",
        'Assistant': "'Assistant', 'sans-serif'",
        "Montserrat": "'Montserrat', 'sans-serif'",
        "OpenSans": "'Open Sans', 'sans-serif'",
        "Roboto": "'Roboto', 'sans-serif'"
      },
      keyframes: {
        upward: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        upward: 'upward 3s ease-in'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

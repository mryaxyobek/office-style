/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors 
      colors: {
        primary: {
          'red-60': '#AE0712',
          'red-50': '#DA0916',
          'red-opacity-20': '#F20C0C',
          'gray-90': '#222',
          'gray-80': '#333',
          'gray-70': '#4D4D4D',
          'gray-60': '#666',
          'gray-50': '#808080',
          'gray-30': '#B3B3B3',
          'gray-20': '#CCC',
          'gray-04': '#F5F5F5',
          'success-70': '#039855',
          'success-50': '#32D583',
          'warning-50': '#FFA800',
        },
        secondary: {
          'whatsapp': '#26D366',
          'vk': '#0277FF',
        },
      },

      // w, h 
      maxWidth: {
        '1800px': '1800px',
        '800px': '800px',
        '352px': '352px',
        '336px': '336px',
        '217px': '217px',
        '260px': '260px',
        '200px': '200px',
      },

      minWidth: {
        '864px': '864px',
      },

      width: {
        '394px': '394px',
        '416px': '416px',
        '224px': '224px',
        '190px': '190px',
        '147px': '147px',
        '41px': '41px',
        '18px': '18px',
      },

      height: {
        '359px': '359px',
        '310px': '310px',
        '260px': '260px',
        '18px': '18px',
      },

      // text 
      fontSize: {
        '29px': '29px',
        '20px': '20px',
        '14px': '14px',
      },

      lineHeight: {
        '25px': '25px',
        '25px!': '25px !important',
        '22.5px': '22.5px',
        '21.6px': '21.6px',
        '19px': '19px',
        '15px!': '15px !important',
        '17.5px': '17.5px',
        '17px': '17px',
      },

      // background 
      backgroundImage: {
        'furnituresBg': 'url(./assets/images/other/drawing-furnitures.png)',
        'whiteLinear': ' linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 86.46%)',
      },

      // position 
      margin: {
        '60px': '60px',
      },

      padding: {
        '152px': '152px',
        '130px': '130px',
        '120px': '120px',
        '100px': '100px',
        '60px': '60px',
        '18px': '18px',
        '11px': '11px',
        '5px': '5px',
      },

      spacing: {
        '556px': '556px',
        '411px': '411px',
        '223px': '223px',
        '198px': '198px',
        '186px': '186px',
        '153px': '153px',
        '104px': '104px',
        '70px': '70px',
        '62px': '62px',
        'auto': 'auto',
        '3px': '3px',
      },
      
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      
      borderRadius: {
        '100%': '100%',
        '2.5xl': '20px',
      },

      // transfrom 
      rotate: {
        '360': '360deg',
        '129deg': '129deg',
        '83deg': '83deg',
      },

      translate: {
        '5px': '5px',
      },

      // grid 
      gridTemplateColumns: {
        '16': 'repeat(16, 1fr)',
      },

      gridColumnStart: {
        '14': '14',
      },

      gridColumnEnd: {
        '17': '17',
        '14': '14',
      },

    },
  },
  plugins: [],
}
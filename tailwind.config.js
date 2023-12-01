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
          'gray-10': '#EDEDED',
          'gray-04': '#F5F5F5',
          'success-70': '#039855',
          'success-50': '#32D583',
          'warning-50': '#FFA800',
        },
        secondary: {
          'whatsapp': '#26D366',
          'vk': '#0277FF',
          'gray-50': '#B5CBEB',
          'gray-40': '#999',
          'blue-70': '#778FB3',
          'brown-90': '#251E18',
          'brown-50': '#764421',
          'brown-10': '#DCCCB0',
          'black-light': '#1C1C1C',
        },
      },

      // w, h 
      maxWidth: {
        '1800px': '1800px',
        '1312px': '1312px',
        '1088px': '1088px',
        '976px': '976px',
        '935px': '935px',
        '864px': '864px',
        '800px': '800px',
        '745px': '745px',
        '763px': '763px',
        '687px': '687px',
        '652px': '652px',
        '639px': '639px',
        '620px': '620px',
        '528px': '528px',
        '352px': '352px',
        '336px': '336px',
        '326px': '326px',
        '305px': '305px',
        '264px': '264px',
        '260px': '260px',
        '245px': '245px',
        '230px': '230px',
        '217px': '217px',
        '200px': '200px',
        '120px': '120px',
      },

      minWidth: {
        '864px': '864px',
        '788px': '788px',
        '500px': '500px',
        '416px': '416px',
        '224px': '224px',
        '300px': '300px',
        '280px': '280px',
        '230px': '230px',
        '120px': '120px',
        '28px': '28px',
        '24px': '24px',
      },

      width: {
        '800px': '800px',
        '720px': '720px',
        '480px': '480px',
        '416px': '416px',
        '394px': '394px',
        '300px': '300px',
        '224px': '224px',
        '190px': '190px',
        '147px': '147px',
        '41px': '41px',
        '18px': '18px',
      },

      height: {
        '780px': '780px',
        '560px': '560px',
        '550px': '550px',
        '513px': '513px',
        '424px': '424px',
        '359px': '359px',
        '340px': '340px',
        '310px': '310px',
        '300px': '300px',
        '260px': '260px',
        '254px': '254px',
        '229.5px': '229.5px',
        '214px': '214px',
        '210px': '210px',
        '175px': '175px',
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
        'furniture-book': 'url(./assets/images/other/furniture-book.png)',

        // for catalog page 
        'catalog-img1': 'url(./assets/images/other/img-for-catalog1.jpg)',
        'catalog-img2': 'url(./assets/images/other/img-for-catalog2.jpg)',
        'catalog-img3': 'url(./assets/images/other/img-for-catalog3.jpg)',
        'catalog-img4': 'url(./assets/images/other/img-for-catalog4.jpg)',
        'catalog-img5': 'url(./assets/images/other/img-for-catalog5.jpg)',
        'catalog-img6': 'url(./assets/images/other/img-for-catalog6.jpg)',
        'catalog-img7': 'url(./assets/images/other/img-for-catalog7.jpg)',
        'catalog-img8': 'url(./assets/images/other/img-for-catalog8.jpg)',
        'catalog-img9': 'url(./assets/images/other/img-for-catalog9.jpg)',
        'catalog-img10': 'url(./assets/images/other/img-for-catalog10.jpg)',

        // catalog category hero 
        'category-hero': 'url(./assets/images/other/gray-furnitures.jpg)',
      },

      backgroundPosition: {
        '200px': '200px',
      },

      // position 
      margin: {
        '60px': '60px',
      },

      padding: {
        '447px': '447px',
        '152px': '152px',
        '130px': '130px',
        '120px': '120px',
        '100px': '100px',
        '60px': '60px',
        '30px': '30px',
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
        '68px': '68px',
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
      gap: {
        '60px': '60px',
      },
    },
    screens: {
      '1800': '1800px',
      '1700': '1700px',
      '1500': '1500px',
      '1450': '1450px',
      '1400': '1400px',
      '1350': '1350px',
      '1300': '1300px',
      '1200': '1200px',
      '1150': '1150px',
      '1050': '1050px',
      '940': '940px',
      '900': '900px',
      '800': '800px',
      '730': '730px',
      '670': '670px',
      '640': '640px',
      '580': '580px',
      '540': '540px',
      '470': '470px',
      '440': '440px',
      '360': '360px',
      '340': '340px',
    },
  },
  plugins: [],
}
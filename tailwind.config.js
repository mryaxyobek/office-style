/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'red-60': '#AE0712',
          'red-50': '#DA0916',
          'red-opacity-20': '#F20C0C',
          'gray-90': '#222',
          'gray-80': '#333',
          'gray-70': '#4D4D4D',
          'gray-50': '#808080',
          'gray-20': '#CCCCCC',
          'gray-04': '#F5F5F5',
          'success-70': '#039855',
          'success-50': '#32D583',
          'warning-50': '#FFA800',
        },
      },

      maxWidth: {
        '1800px': '1800px',
      },

      width: {
        '394px': '394px',
        '41px': '41px',
        '18px': '18px',
      },

      height: {
        '18px': '18px',
      },

      fontSize: {
        '20px': '20px',
        '14px': '14px',
      },

      lineHeight: {
        '25px': '25px',
        '22.5px': '22.5px',
        '21.6px': '21.6px',
        '19px': '19px',
        '17.5px': '17.5px',
        '17px': '17px',
      },

      margin: {
        '60px': '60px',
      },

      padding: {
        '152px': '152px',
        '18px': '18px',
        '11px': '11px',
        '5px': '5px',
      },

      spacing: {
        '186px': '186px',
        'auto': 'auto',
        '3px': '3px',
      },

      rotate: {
        '129deg': '129deg',
        '83deg': '83deg',
      },

      borderRadius: {
        '100%': '100%',
      },

      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      rotate: {
        '360': '360deg',
      },
      translate: {
        '5px': '5px',
      },
    },
  },
  plugins: [],
}
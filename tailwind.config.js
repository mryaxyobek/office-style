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

      fontSize: {
        '20px': '20px',
        '14px': '14px',
      },

      lineHeight: {
        '25px': '25px',
        '21px': '21px',
        '19px': '19px',
        '17.5px': '17.5px',
      },

      margin: {
        '60px': '60px',
      },

      spacing: {
        '186px': '186px',
      },

      rotate: {
        '129deg': '129deg',
        '83deg': '83deg',
      },
    },
  },
  plugins: [],
}
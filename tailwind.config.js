import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
   
  theme: {
    extend: {
       colors: {
        pastel: {
          red: '#F4E7DD',
          yellow: '#FFCF72',
          green: '#E2E0A0',
          blue: '#B2E7F1',
        },
     
      },
    },
  },
  plugins: [],
}

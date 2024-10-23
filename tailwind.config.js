// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['index.html'],
//   theme: {
//     extend: {
//       colors: {
//       }
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: ['index.html','fotografer.html','fotografer1.html'],
  // darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#009379',
        secondary: '#64748b',
        third: '#2D2D2D',
        dark: '#0f172a',
        color1: '#FF6250',
        color2: '#F3AFA8',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
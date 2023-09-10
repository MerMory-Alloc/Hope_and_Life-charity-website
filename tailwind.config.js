/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '475px',
      // => @media (min-width: 475px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1050px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    fontFamily: {
      new: ['new'],
      sulas: ['sulas']
    },
      colors: {
        'pri': '#005544',
        'sec': '#043f2e',
        'ter': '#c8f168',
        'ter2': '#c1e864',
        'qua': '#a1cd5c',
        'qua2': '#a5c759',
        'qua3': '#bce463',
        'qui': '#1d5243',
        'qui2': '#275a4b',
        'ext': '#d1dcda',
        'ext2': '#b9c2c0',
        'ext3': '#bdc4c3',
        'ext4': '#eaece2'
      }
    },
  },
  plugins: [],
}

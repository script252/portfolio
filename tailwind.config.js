
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Josefin Sans', 'sans']
    },
    extend: {
      colors: {
        'p-black': '#151515',
        'p-grey': '#1e1e1e',
        'p-metal': {
          '700': '#374245',
          '800': '#2e3638',
          '900': '#252b2c',
          '950': '#1d2021',
        },
        'p-tan': {
          '700': '#aba869',
          '800': '#85835e',
          '900': '#5f5e4e',
          '950': '#3a3933',
        },
        'p-tan-light': {
          '700': '#ccc89d',
          '800': '#9e9b7b',
          '900': '#706e58',
          '950': '#424136',
        },
      },
      keyframes: {
        'translate-screen-up': {
          '0%': { transform: 'translate(0vh, 0vh)', opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { transform: 'translate(0vh, -5vh)', opacity: 0 },
        },
        'translate-screen-down': {
          '0%': { transform: 'translate(0vh, 5vh)', opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { transform: 'translate(0vh, 0vh)', opacity: 1 },
        }
      },
      animation: {
          'transition-out': 'translate-screen-up 0.25s ease-in 1',
          'transition-in': 'translate-screen-down 0.25s ease-in 1',
      }
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'dark'
    ],
  }
}

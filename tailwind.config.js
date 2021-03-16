module.exports = {
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    fontFamily: {
      'sans': ['Raglan Sans', 'Arial', 'sans-serif'],
      'mono': ['Space Mono', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'off-black': '#373c42',
        'off-black-dark': '#292e36',
        'off-white': '#EAE8E4',
        orange: {
          light: '#ffb288',
          default: '#d18d67',
          dark: '#ce8860',
          darker: '#C77546'
        },
        green: {
          default: '#4f8680',
          dark: '#3f7771'
        },
        purple: {
          default: '#85729b'
        },
        yellow: {
          default: '#e6ca69',
          dark: '#E3C152'
        }
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.7rem',
        '7xl': '4.65rem',
        '8xl': '6.55rem',
        '9xl': '7.35rem',
      },
      lineHeight: {
        'negative': '0.95',
        'minimal': '1.23',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '120': '32rem',
      },
      opacity: {
        '65': '.65',
      }
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    translate: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    scale: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    rotate: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    skew: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    width: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    textColor: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    margin: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
  }
}

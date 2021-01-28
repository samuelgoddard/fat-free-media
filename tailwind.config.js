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
        'off-white': '#EAE8E4',
        orange: {
          default: '#d18d67',
          dark: '#ce8860'
        },
        green: {
          default: '#4f8680',
          dark: '#3f7771'
        },
        purple: {
          default: '#85729b'
        },
        yellow: {
          default: '#e6ca69'
        }
      },
      fontSize: {
        '5xl': '2.95rem',
        '6xl': '3.45rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    translate: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
    skew: ['hover', 'focus', 'group-hover', 'group-focus', 'responsive'],
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffb6e6',
          DEFAULT: '#e9408f',
          dark: '#a21a5b',
        },
        secondary: {
          light: '#3ecbff',
          DEFAULT: '#1E90FF',
          dark: '#155a8a',
        },
        background: {
          DEFAULT: '#fff',
          soft: '#fff0f6',
        },
        card: {
          DEFAULT: '#fff',
        },
        text: {
          DEFAULT: '#222',
          inverted: '#fff',
          highlight: '#e9408f',
          muted: '#888',
        },
        border: {
          DEFAULT: '#e9408f',
        },
        shadow: {
          soft: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-merriweather)'],
      },
    },
  },
  plugins: [],
} 
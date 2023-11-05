/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%, 100%': {
            transform: 'rotate(0deg) translateY(-80px) rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg) translateY(-80px) rotate(-180deg)',
          },
        },
        'orbit-opposite': {
          '0%, 100%': {
            transform: 'rotate(180deg) translateY(-80px) rotate(180deg)',
          },
          '50%': {
            transform: 'rotate(360deg) translateY(-80px) rotate(0deg)',
          },
        },
      },
      animation: {
        orbit: 'orbit 10s linear infinite',
        'orbit-opposite': 'orbit-opposite 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

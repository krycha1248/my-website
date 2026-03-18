module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
  daisyui: {
    themes: ["light", "dark"],
  },
};
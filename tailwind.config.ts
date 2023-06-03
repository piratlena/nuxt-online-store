/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-dark-1": "#221f1f",
        "green-1": "#00a046",
        "green-2": "#12b488",
      },
    },
  },
  plugins: [],
};

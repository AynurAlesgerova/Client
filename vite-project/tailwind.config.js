/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    //  require('flowbite/plugin')
  ],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1479px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "766px" },
      xs: { max: "480px" },
    },
  },
};


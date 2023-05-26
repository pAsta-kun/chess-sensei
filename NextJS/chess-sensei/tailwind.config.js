/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      text: "#772F00",
      background: "#f2caad",
      primary: "#ad3401",
      secondary: "#ba6440",
      accent: "#df5d26",
      zero: "rgb(247, 247, 247, 0%)"
    },
  },
  plugins: [],
}

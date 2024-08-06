/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mint-one": "#d2e5d3",
        "mint-two": "#b3d3b4",
        "mint-three": "#94c195",
        "mint-btn": "#477c48",
        "mint-hover": "#355d36"
      }
    },
  },
  plugins: [],
}


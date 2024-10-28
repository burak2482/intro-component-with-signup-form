/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: 'hsl(0, 100%, 74%) ',
        customGreen: ' hsl(154, 59%, 51%)', 
        customBlue: 'hsl(248, 32%, 49%)', 
        customDarkBlue: 'hsl(249, 10%, 26%)',
        customGreyishBlue: 'hsl(246, 25%, 77%)',
      },
    },
  },
  plugins: [],
};

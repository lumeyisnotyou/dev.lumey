/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    listStyleType: {
      // Dash
      dash: 'square',
    },
    colors: {
      accent: '#bcdceb'
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      mono: ['Major Mono Display', 'monospace'],
    },
  },
  plugins: [
  ],
}

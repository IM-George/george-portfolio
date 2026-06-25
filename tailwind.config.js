/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0E100F',        // page background (gsap near-black green)
        panel: '#16191A',       // raised surface
        ring: '#262B27',        // borders / hairlines
        mist: '#8E978F',        // secondary text
        chalk: '#F4F6F4',       // primary text
        green: '#0AE448',       // GSAP signature green
        lime: '#9CFF57',        // lighter green for gradients
        plasma: '#9D7BFF',      // violet secondary accent
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F9FA',
        paper: '#FFFFFF',
        taupe: '#D8E2DC',
        beige: '#E7E0EE',
        charcoal: '#191C1D',
        obsidian: '#2E3132',
        'dark-surface': '#434845',
        'muted-dark': '#57615C',
        'muted-light': '#F0F1F2',
        'surface-dim': '#D9DADB',
        'surface-low': '#F3F4F5',
        'surface-container': '#EDEEEF',
        'surface-high': '#E1E3E4',
        'primary-mint': '#D8E2DC',
        'secondary-lavender': '#E7E0EE',
        'tertiary-blue': '#D0E1F9',
        primary: '#57615C',
        secondary: '#615C68',
        tertiary: '#4F6074',
        outline: '#737875',
        'border-light': 'rgba(87, 97, 92, 0.18)',
        'border-dark': 'rgba(255, 255, 255, 0.35)',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '280px',
        'section-gap': '5rem',
      },
      borderRadius: {
        glass: '1.5rem',
        'glass-lg': '2rem',
      },
      boxShadow: {
        glass: 'inset 0 1px 1px rgba(255,255,255,0.82), 0 24px 70px rgba(79,96,116,0.12)',
        glow: '0 18px 60px rgba(87,97,92,0.18)',
      },
    },
  },
  plugins: [],
};

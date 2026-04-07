/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── Primary ──
        primary: '#ef7a1a',
        'primary-dark': '#d66a12',
        'primary-darker': '#b13b41',
        'primary-light': '#ff9a44',

        // ── Backgrounds ──
        'bg-cream': '#f4f2ec',
        'bg-light': '#f8f8f8',
        'bg-tertiary': '#ededed',
        'bg-white': '#ffffff',

        // ── Text ──
        'text-dark': '#242424',
        'text-body': '#333333',
        'text-grey': '#777777',
        'text-light': '#999999',

        // ── Borders ──
        'border-light': '#e0e0e0',
        'border-lighter': '#eaeaea',

        // ── Semantic ──
        'success-bg': '#cef5ca',
        'success-text': '#114e0b',
        'error-bg': '#f8e4e4',
        'error-text': '#3b0b0b',
        'warning-bg': '#fcf8d8',
        'warning-text': '#5e5515',

        // ── Accents ──
        'accent-blue': '#4d65ff',
        'star-yellow': '#fee050',
        'trust-pilot': '#00b67a',
      },
      fontFamily: {
        heading: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['PT Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.6vw, 1.375rem)', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'fluid-2xl': ['clamp(1.5rem, 1.2rem + 1.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'fluid-3xl': ['clamp(2rem, 1.5rem + 2.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'fluid-4xl': ['clamp(2.5rem, 1.8rem + 3.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        container: '80rem',
        content: '42rem',
        'sidebar-cta': '22rem',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'card-promo': '0 4px 16px rgba(0, 0, 0, 0.12)',
        modal: '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '0-5': '0.5rem',
        '0-75': '0.75rem',
      },
    },
  },
  plugins: [],
};

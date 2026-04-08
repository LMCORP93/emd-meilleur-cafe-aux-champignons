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

      // ── Typography Scale ──────────────────────────────────────────
      // Ratio 1.25 (Major Third) for headings
      // Step 2px for body text sizes
      // All values use clamp() for fluid scaling between mobile & desktop
      //
      // HEADINGS (Archivo, bold)
      //   H1  40px  →  28px    Hero & page titles
      //   H2  28px  →  22px    Section titles
      //   H3  22px  →  18px    Sub-sections
      //   H4  18px  →  16px    Card titles
      //   H5  16px  →  15px    Block labels
      //   H6  14px  →  13px    Sub-labels
      //
      // BODY (PT Sans)
      //   medium   16px  →  15px    Main paragraph text
      //   regular  14px  →  13px    Default body, sidebar text
      //   small    12px  →  11px    Captions, badges, meta
      fontSize: {
        // ── Headings ──
        'h1': ['clamp(1.75rem, 1.2rem + 2.75vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2': ['clamp(1.375rem, 1.15rem + 1.1vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 1rem + 0.6vw, 1.375rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'h5': ['clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
        'h6': ['clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '600' }],

        // ── Body Text ──
        'text-medium': ['clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'text-regular': ['clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'text-small': ['clamp(0.6875rem, 0.675rem + 0.1vw, 0.75rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],

        // ── Legacy aliases (kept for backward compat) ──
        'fluid-xs': ['clamp(0.6875rem, 0.675rem + 0.1vw, 0.75rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'fluid-sm': ['clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'fluid-base': ['clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'fluid-lg': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.4', letterSpacing: '0' }],
        'fluid-xl': ['clamp(1.125rem, 1rem + 0.6vw, 1.375rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'fluid-2xl': ['clamp(1.375rem, 1.15rem + 1.1vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-3xl': ['clamp(1.75rem, 1.2rem + 2.75vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'fluid-4xl': ['clamp(2rem, 1.5rem + 2.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
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
        card: '0 6px 16px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'card-promo': '0 6px 16px rgba(0, 0, 0, 0.12)',
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

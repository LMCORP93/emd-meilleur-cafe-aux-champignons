/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f58220',
          'orange-hover': '#e6741a',
          cream: '#fff9f2',
          beige: '#f4f2ec',
          tertiary: '#ededed',
          dark: '#242424',
          body: '#4a4a4a',
          heading: '#000000',
          green: '#2d8a2d',
          'green-bg': '#e8f5e9',
          'orange-bg': '#fff3e0',
          star: '#fee050',
        },
      },
      fontFamily: {
        heading: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['PT Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '800px',
        wide: '1200px',
      },
      borderRadius: {
        card: '10px',
        cardlg: '16px',
      },
    },
  },
  plugins: [],
};

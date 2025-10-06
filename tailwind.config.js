/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': 'var(--font-primary)',
        'headings': 'var(--font-headings)',
        'accent': 'var(--font-accent)',
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'surface': 'var(--color-surface)',
        'surface-light': 'var(--color-surface-light)',
        'custom-border': 'var(--color-border)',
        'card': {
          'bg': 'var(--color-card-bg)',
          'selected': 'var(--color-card-selected)',
          'shadow': 'var(--color-card-shadow)',
        },
        'text': {
          'primary': 'var(--color-text-primary)',
          'secondary': 'var(--color-text-secondary)',
          'muted': 'var(--color-text-muted)',
          'light': 'var(--color-text-light)',
        },
        'accent': {
          'blue': 'var(--color-accent-blue)',
          'blue-hover': 'var(--color-accent-blue-hover)',
        }
      },
      backgroundColor: {
        'main': 'var(--color-background)',
      }
    },
  },
  plugins: [typography],
}
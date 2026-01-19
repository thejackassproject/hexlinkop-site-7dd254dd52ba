/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary)',
                opacity: '0.8',
              },
            },
            h2: {
              color: 'var(--foreground)',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: 'var(--foreground)',
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            blockquote: {
              color: 'var(--muted-foreground)',
              borderLeftColor: 'var(--primary)',
              fontStyle: 'italic',
              padding: '1em 1.5em',
              backgroundColor: 'var(--muted)',
              borderRadius: '0.5rem',
            },
            code: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--muted)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

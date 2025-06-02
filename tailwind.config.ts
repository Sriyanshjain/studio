import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        'slide-in-up': {
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        'slide-in-from-bottom': {
          from: {transform: 'translateY(50px)', opacity: '0'},
          to: {transform: 'translateY(0)', opacity: '1'},
        },
        'sparkle': {
          '0%': {opacity: '0', transform: 'scale(0.5) rotate(0deg)'},
          '50%': {opacity: '1', transform: 'scale(1) rotate(180deg)'},
          '100%': {opacity: '0', transform: 'scale(0.5) rotate(360deg)'},
        },
        'gradient-pulse': {
          '0%, 100%': {backgroundPosition: '0% 50%'},
          '50%': {backgroundPosition: '100% 50%'},
        },
      },
      animation: {
 'accordion-down': 'accordion-down 0.2s ease-out',
 'accordion-up': 'accordion-up 0.2s ease-out',
 'fade-in': 'fade-in 0.5s ease-out',
 'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
 'slide-in-from-bottom': 'slide-in-from-bottom 0.8s ease-out forwards',
 'sparkle': 'sparkle 0.6s ease-in-out infinite',
 'gradient-pulse': 'gradient-pulse 4s ease infinite',
      },
      animationDelay: { // Using number keys for utility names
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
        1100: '1100ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

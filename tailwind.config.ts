import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6B2D8C',
          purpleDark: '#4A1F61',
          purpleLight: '#B594CC',
          purpleSoft: '#EFE6F4',
        },
        bg: {
          warm: '#FAF7F5',
          cream: '#F2EBE7',
          card: '#FFFFFF',
        },
        ink: {
          body: '#2D2A33',
          muted: '#6B6470',
          deep: '#1F1B26',
        },
        accent: {
          gold: '#C5A361',
          terracotta: '#C97B5F',
        },
        line: '#E5DDD9',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight Variable"', '"Inter Variable"', 'system-ui', 'sans-serif'],
        bangla: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '600': '600ms',
        '1200': '1200ms',
      },
      maxWidth: {
        container: '1280px',
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.03)',
        cardHover: '0 8px 24px rgba(107,45,140,0.08)',
      },
      keyframes: {
        pinpulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.85' },
        },
        underlineSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        pinpulse: 'pinpulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // deep navy primary — high contrast for white text on filled surfaces.
          // (Token names kept as `purple*` to avoid churning every component className.)
          purple: '#192B72',       // primary brand navy (gradient anchor — darker end)
          purpleLite: '#354DAE',   // secondary (gradient anchor — lighter end)
          purpleDark: '#0E1A4D',
          purpleLight: '#8E9CCF',  // lighter UI bits (active states, secondary icons)
          purpleSoft: '#E8ECF6',   // very soft tint for backgrounds / icon tiles
          purpleDeep: '#0A0E26',   // darkest contrast accent
        },
        bg: {
          warm: '#FCFBFC',   // near-white with a whisper of warm-cool tint
          cream: '#F4F2F8',  // very light lavender-cream
          card: '#FFFFFF',
          blush: '#FAF6F4',  // soft off-white blush
        },
        ink: {
          body: '#3D3540',
          muted: '#766E7A',
          deep: '#2F2530',
        },
        accent: {
          gold: '#B8956A',
          blush: '#C49585',
          terracotta: '#C97B5F',
          sage: '#8FA48B',
        },
        line: '#E8DFD9',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        bangla: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces Variable"', '"DM Serif Display"', 'Georgia', 'serif'],
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
        prose: '64ch',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        sm: '0.375rem',
        md: '0.625rem',
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(61,53,64,0.04), 0 4px 12px rgba(61,53,64,0.02)',
        cardHover: '0 2px 4px rgba(61,53,64,0.04), 0 14px 32px rgba(126,75,157,0.08)',
        soft: '0 12px 40px rgba(61,53,64,0.06)',
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

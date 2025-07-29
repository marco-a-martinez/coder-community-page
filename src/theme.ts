// Official Coder.com design system - EXACT match from coder/coder repository
// Colors extracted from /site/src/index.css in the official Coder codebase

export const coderColors = {
  // Primary brand colors - Official Coder uses BLUE for links, not purple
  primary: {
    blue: 'hsl(221, 83%, 53%)', // Official Coder link color (light theme)
    blueDark: 'hsl(213, 94%, 68%)', // Official Coder link color (dark theme)
    blueLight: 'hsl(221, 83%, 68%)',
  },
  
  // Content colors - EXACT match from official Coder
  content: {
    primary: 'hsl(240, 10%, 4%)',
    secondary: 'hsl(240, 5%, 34%)',
    link: 'hsl(221, 83%, 53%)', // Official Coder blue, NOT purple!
    invert: 'hsl(0, 0%, 98%)',
    disabled: 'hsl(240, 5%, 65%)',
    success: 'hsl(142, 72%, 29%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
  },
  
  // Surface colors - EXACT match from official Coder
  surface: {
    primary: 'hsl(0, 0%, 98%)', // Official Coder surface-primary
    secondary: 'hsl(240, 5%, 96%)', // Official Coder surface-secondary
    tertiary: 'hsl(240, 6%, 90%)', // Official Coder surface-tertiary
    quaternary: 'hsl(240, 5%, 84%)', // Official Coder surface-quaternary
    invertPrimary: 'hsl(240, 4%, 16%)',
    invertSecondary: 'hsl(240, 5%, 26%)',
    destructive: 'hsl(0, 93%, 94%)', // Official Coder surface-destructive
    green: 'hsl(141, 79%, 85%)', // Official Coder surface-green
    grey: 'hsl(240, 5%, 96%)', // Official Coder surface-grey
    orange: 'hsl(34, 100%, 92%)', // Official Coder surface-orange
    sky: 'hsl(201, 94%, 86%)', // Official Coder surface-sky
    red: 'hsl(0, 93%, 94%)', // Official Coder surface-red
    purple: 'hsl(251, 91%, 95%)', // Official Coder surface-purple
  },
  
  // Border colors - EXACT match from official Coder
  border: {
    default: 'hsl(240, 6%, 90%)', // Official Coder border-default
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
    hover: 'hsl(240, 5%, 34%)',
  },
  
  // Highlight colors - EXACT match from official Coder
  highlight: {
    purple: 'hsl(262, 83%, 58%)', // Official Coder highlight-purple
    green: 'hsl(143, 64%, 24%)', // Official Coder highlight-green
    grey: 'hsl(240, 5%, 65%)', // Official Coder highlight-grey
    sky: 'hsl(201, 90%, 27%)', // Official Coder highlight-sky
    red: 'hsl(0, 74%, 42%)', // Official Coder highlight-red
  },
};

export const theme = {
  colors: coderColors,
  radius: {
    sm: '0.375rem', // 6px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    pill: '9999px', // Full rounded (pill shape)
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
};

export type Theme = typeof theme;
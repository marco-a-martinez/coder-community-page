// Actual Coder.com design system extracted from their codebase
// Uses HSL values and CSS custom properties like the real site

export const coderColors = {
  // Content colors
  content: {
    primary: 'hsl(240, 10%, 4%)',
    secondary: 'hsl(240, 5%, 34%)',
    link: 'hsl(221, 83%, 53%)',
    invert: 'hsl(0, 0%, 98%)',
    disabled: 'hsl(240, 5%, 65%)',
    success: 'hsl(142, 72%, 29%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
  },
  
  // Surface colors
  surface: {
    primary: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(240, 5%, 96%)',
    tertiary: 'hsl(240, 6%, 90%)',
    quaternary: 'hsl(240, 5%, 84%)',
    invertPrimary: 'hsl(240, 4%, 16%)',
    invertSecondary: 'hsl(240, 5%, 26%)',
    destructive: 'hsl(0, 93%, 94%)',
    green: 'hsl(141, 79%, 85%)',
    grey: 'hsl(240, 5%, 96%)',
    orange: 'hsl(34, 100%, 92%)',
    sky: 'hsl(201, 94%, 86%)',
    red: 'hsl(0, 93%, 94%)',
    purple: 'hsl(251, 91%, 95%)',
  },
  
  // Border colors
  border: {
    default: 'hsl(240, 6%, 90%)',
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
    hover: 'hsl(240, 5%, 34%)',
  },
  
  // Highlight colors
  highlight: {
    purple: 'hsl(262, 83%, 58%)',
    green: 'hsl(143, 64%, 24%)',
    grey: 'hsl(240, 5%, 65%)',
    sky: 'hsl(201, 90%, 27%)',
    red: 'hsl(0, 74%, 42%)',
  },
};

export const theme = {
  colors: coderColors,
  radius: '0.5rem',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
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
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export type Theme = typeof theme;
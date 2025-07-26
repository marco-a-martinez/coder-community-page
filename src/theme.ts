// Official Coder.com design system based on brand guidelines
// Updated to match coder.com/cde and brand guidelines

export const coderColors = {
  // Primary brand colors from Coder brand guidelines
  primary: {
    purple: 'hsl(262, 83%, 58%)', // Main Coder purple
    purpleDark: 'hsl(262, 83%, 48%)',
    purpleLight: 'hsl(262, 83%, 68%)',
  },
  
  // Content colors - updated for modern look
  content: {
    primary: 'hsl(240, 10%, 4%)',
    secondary: 'hsl(240, 5%, 34%)',
    link: 'hsl(262, 83%, 58%)', // Using brand purple for links
    invert: 'hsl(0, 0%, 98%)',
    disabled: 'hsl(240, 5%, 65%)',
    success: 'hsl(142, 72%, 29%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
  },
  
  // Surface colors - softer, more modern
  surface: {
    primary: 'hsl(0, 0%, 100%)', // Pure white
    secondary: 'hsl(240, 5%, 98%)', // Very light gray
    tertiary: 'hsl(240, 6%, 95%)', // Light gray
    quaternary: 'hsl(240, 5%, 90%)', // Medium light gray
    invertPrimary: 'hsl(240, 4%, 16%)',
    invertSecondary: 'hsl(240, 5%, 26%)',
    destructive: 'hsl(0, 93%, 97%)',
    green: 'hsl(141, 79%, 95%)',
    grey: 'hsl(240, 5%, 98%)',
    orange: 'hsl(34, 100%, 97%)',
    sky: 'hsl(201, 94%, 95%)',
    red: 'hsl(0, 93%, 97%)',
    purple: 'hsl(262, 83%, 97%)', // Very light purple
    purpleAccent: 'hsl(262, 83%, 95%)', // Light purple accent
  },
  
  // Border colors - softer
  border: {
    default: 'hsl(240, 6%, 92%)',
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(27, 96%, 61%)',
    destructive: 'hsl(0, 84%, 60%)',
    hover: 'hsl(240, 5%, 34%)',
    purple: 'hsl(262, 83%, 85%)', // Purple border
  },
  
  // Highlight colors - brand focused
  highlight: {
    purple: 'hsl(262, 83%, 58%)', // Main brand purple
    purpleLight: 'hsl(262, 83%, 95%)',
    green: 'hsl(143, 64%, 24%)',
    grey: 'hsl(240, 5%, 65%)',
    sky: 'hsl(201, 90%, 27%)',
    red: 'hsl(0, 74%, 42%)',
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
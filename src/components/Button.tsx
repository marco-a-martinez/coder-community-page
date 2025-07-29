/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href
}) => {
  const baseStyles = css`
    border: none;
    border-radius: var(--radius-pill); /* Pill shape like Coder brand */
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid transparent;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px hsl(var(--content-link) / 0.25);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px hsl(var(--content-link) / 0.2);
    }
  `;

  const sizeStyles = {
    sm: css`
      padding: 0.5rem 1.25rem;
      font-size: 0.875rem;
      height: 2.25rem;
      min-width: 5rem;
    `,
    md: css`
      padding: 0.75rem 1.75rem;
      font-size: 1rem;
      height: 2.75rem;
      min-width: 6rem;
    `,
    lg: css`
      padding: 1rem 2.25rem;
      font-size: 1.125rem;
      height: 3.25rem;
      min-width: 7rem;
    `,
  };

  const variantStyles = {
    primary: css`
      background: linear-gradient(135deg, hsl(var(--content-link)), hsl(var(--primary-blue-dark)));
      color: white;
      border-color: hsl(var(--content-link));
      
      &:hover {
        background: linear-gradient(135deg, hsl(var(--primary-blue-dark)), hsl(var(--content-link)));
        border-color: hsl(var(--primary-blue-dark));
        box-shadow: 0 8px 25px hsl(var(--content-link) / 0.35);
      }
    `,
    secondary: css`
      background-color: hsl(var(--surface-tertiary));
      color: hsl(var(--content-primary));
      border-color: hsl(var(--border-default));
      
      &:hover {
        background-color: hsl(var(--surface-quaternary));
        border-color: hsl(var(--border-hover));
        box-shadow: 0 4px 12px hsl(var(--border-default) / 0.3);
      }
    `,
    outline: css`
      background-color: transparent;
      color: hsl(var(--content-link));
      border-color: hsl(var(--content-link));
      
      &:hover {
        background-color: hsl(var(--surface-purple));
        border-color: hsl(var(--primary-blue-dark));
        color: hsl(var(--primary-blue-dark));
        box-shadow: 0 4px 12px hsl(var(--content-link) / 0.2);
      }
    `,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        css={[baseStyles, sizeStyles[size], variantStyles[variant]]}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      css={[baseStyles, sizeStyles[size], variantStyles[variant]]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
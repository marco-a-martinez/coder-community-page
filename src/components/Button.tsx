/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick 
}) => {
  const baseStyles = css`
    border: none;
    border-radius: var(--radius);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    
    &:hover {
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `;

  const sizeStyles = {
    sm: css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      height: 2rem;
    `,
    md: css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      height: 2.5rem;
    `,
    lg: css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
      height: 3rem;
    `,
  };

  const variantStyles = {
    primary: css`
      background-color: hsl(var(--content-primary));
      color: hsl(var(--content-invert));
      border: 1px solid hsl(var(--content-primary));
      
      &:hover {
        background-color: hsl(var(--content-secondary));
        border-color: hsl(var(--content-secondary));
      }
    `,
    secondary: css`
      background-color: hsl(var(--surface-tertiary));
      color: hsl(var(--content-primary));
      border: 1px solid hsl(var(--border-default));
      
      &:hover {
        background-color: hsl(var(--surface-quaternary));
        border-color: hsl(var(--border-hover));
      }
    `,
    outline: css`
      background-color: transparent;
      color: hsl(var(--content-primary));
      border: 1px solid hsl(var(--border-default));
      
      &:hover {
        background-color: hsl(var(--surface-secondary));
        border-color: hsl(var(--border-hover));
      }
    `,
  };

  return (
    <button
      css={[baseStyles, sizeStyles[size], variantStyles[variant]]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
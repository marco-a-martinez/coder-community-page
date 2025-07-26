/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'contained', 
  size = 'medium',
  onClick 
}) => {
  const baseStyles = css`
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    
    &:hover {
      transform: translateY(-1px);
    }
  `;

  const sizeStyles = {
    small: css`
      padding: 8px 16px;
      font-size: 14px;
    `,
    medium: css`
      padding: 12px 24px;
      font-size: 16px;
    `,
    large: css`
      padding: 16px 32px;
      font-size: 18px;
    `,
  };

  const variantStyles = {
    contained: css`
      background: ${theme.roles.notice.outline};
      color: ${theme.palette.text.primary};
      
      &:hover {
        background: ${theme.roles.notice.outline}dd;
      }
    `,
    outlined: css`
      background: transparent;
      border: 2px solid ${theme.roles.notice.outline};
      color: ${theme.roles.notice.outline};
      
      &:hover {
        background: ${theme.roles.notice.background};
        color: ${theme.roles.notice.text};
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
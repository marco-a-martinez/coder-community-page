import { css } from '@emotion/react';

interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}

export const Stack: React.FC<StackProps> = ({ 
  children, 
  direction = 'column', 
  spacing = 1,
  align = 'stretch',
  justify = 'flex-start'
}) => {
  const stackStyles = css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${spacing * 8}px;
  `;

  return (
    <div css={stackStyles}>
      {children}
    </div>
  );
};
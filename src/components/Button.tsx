// src/components/Button.tsx

import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'accent'; 
}

const Button: React.FC<ButtonProps> = ({ children, variant, className, ...rest }) => {
  const variantClass = variant === 'accent' ? 'btn-accent' : 'btn-primary';

  const allClassNames = `btn ${variantClass} ${className || ''}`;

  return (
    <button className={allClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'gradient' | 'outline';
  className?: string;
  Icon?: IconType | null;
}

function Button({
  children,
  variant = 'default',
  className = '',
  Icon = null,
  ...buttonProps
}: ButtonProps) {
  const commonClassess =
    'px-3 py-2 rounded-md shadow-md text-center flex items-center justify-center gap-2 w-fit';

  const styles = {
    default:
      'text-text-main bg-background-main border border-transparent hover:border-background-dark',
    gradient:
      'text-text-primary bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl gradient element-to-rotate',
    outline:
      'text-test-main hover:text-test-primary border border-primary/50 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary',
  };

  const buttonClassess = `${commonClassess} ${styles[variant]} ${className}`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={buttonClassess} {...buttonProps}>
      {Icon && <Icon />} {children}
    </button>
  );
}

export default Button;

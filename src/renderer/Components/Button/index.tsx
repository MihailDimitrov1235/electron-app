/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'gradient' | 'outline' | 'icon';
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
    ' shadow-md text-center flex items-center justify-center gap-2 ';

  const styles = {
    default:
      'w-fit px-3 py-2 rounded-md text-text-main bg-background-main border border-transparent hover:border-background-dark',
    gradient:
      'w-fit px-3 py-2 rounded-md text-text-primary bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl gradient element-to-rotate',
    outline:
      'w-fit px-3 py-2 rounded-md text-test-main hover:text-test-primary border border-primary/50 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary',
    icon: 'w-10 p-0 rounded-full aspect-square border-background-dark border ring-text-main hover:ring-1 text-2xl',
  };

  const buttonClassess = `${className} ${styles[variant]} ${commonClassess}`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={buttonClassess} {...buttonProps}>
      {Icon && <Icon />} {children}
    </button>
  );
}

export default Button;

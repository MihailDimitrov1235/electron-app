/* eslint-disable react/require-default-props */
import { error } from 'console';
import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'gradient'
    | 'outline'
    | 'icon'
    | 'icon-square'
    | 'error';
  className?: string;
  Icon?: IconType | null;
  uppercase?: boolean;
}

function Button({
  children,
  variant = 'default',
  className = '',
  Icon = null,
  uppercase = true,
  ...buttonProps
}: ButtonProps) {
  const commonClassess = `shadow-md text-center flex items-center justify-center gap-2 ${
    uppercase && 'uppercase'
  }`;

  const iconProps = `w-10 p-0 aspect-square border-background-dark border ring-text-main ${
    buttonProps.disabled ? '!text-devider' : 'hover:ring-1'
  } text-2xl`;

  const styles = {
    default: `w-fit px-3 py-2 rounded-md text-text-main bg-background-main border border-transparent hover:border-background-dark ring-text-main active:ring-1`,
    gradient: `w-fit px-3 py-2 rounded-md text-primary-background bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl gradient element-to-rotate`,
    outline: `w-fit px-3 py-2 rounded-md text-test-main hover:text-primary-background border border-primary hover:bg-primary focus:ring-2 focus:outline-none focus:ring-primary`,
    icon: `rounded-full ${iconProps}`,
    'icon-square': `rounded-md ${iconProps}`,
    error: `w-fit px-3 py-2 rounded-md text-text-main bg-red-600 ring-text-main active:ring-1`,
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

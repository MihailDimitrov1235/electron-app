/* eslint-disable react/require-default-props */
import React, { MouseEventHandler, JSX } from 'react';
import DefaultButton from './DefaultButton';

type ButtonProps = {
  variant?: 'default' | 'gradient' | 'outline';
  children?: JSX.Element | React.ReactNode;
  onClick?: MouseEventHandler;
  classess?: string;
};

export default function Button({
  children,
  onClick = () => {},
  variant = 'default',
  classess = '',
}: ButtonProps) {
  const commonClassess = 'px-3 py-2 rounded-md shadow-md text-center';
  const styles = {
    default:
      'text-text bg-background border border-transparent hover:border-backgroundDark',
    gradient:
      'text-textPrimary bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl',
    outline:
      '!p-1 text-text group bg-gradient-to-br from-primary to-secondary relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden',
  };

  return (
    <DefaultButton
      onClick={onClick}
      classess={`${commonClassess} ${styles[variant]} ${classess}`}
    >
      {variant === 'outline' ? (
        <span className="px-2 py-1 relative transition-all ease-in duration-75 bg-background rounded-md group-hover:bg-opacity-0 group-hover:text-textPrimary">
          {children}
        </span>
      ) : (
        <div className={classess}>{children}</div>
      )}
    </DefaultButton>
  );
}

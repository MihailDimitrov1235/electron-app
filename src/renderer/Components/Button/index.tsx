/* eslint-disable react/require-default-props */
import { IconType } from 'react-icons';
import React, { MouseEventHandler, JSX } from 'react';

type ButtonProps = {
  variant?: 'default' | 'gradient' | 'outline';
  children?: JSX.Element | React.ReactNode;
  onClick?: MouseEventHandler;
  classess?: string;
  Icon?: IconType | null;
};

function DefaultButton({
  children,
  classess,
  onClick,
}: {
  children: React.ReactNode;
  classess: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} type="button" className={classess}>
      {children}
    </button>
  );
}

export default function Button({
  children,
  onClick = () => {},
  variant = 'default',
  classess = '',
  Icon = null,
}: ButtonProps) {
  const commonClassess =
    'px-3 py-2 rounded-md shadow-md text-center flex felx-col items-center justify-center gap-2 w-fit';
  const styles = {
    default:
      'text-text-main bg-background-main border border-transparent hover:border-background-dark',
    gradient:
      'text-text-primary bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl gradient element-to-rotate',
    outline: `text-text-main bg-gradient-to-r from-primary to-secondary gradient element-to-rotate`,
  };

  return (
    <DefaultButton
      onClick={onClick}
      classess={`${commonClassess} ${styles[variant]} ${classess}`}
    >
      {Icon && <Icon />} {children}
    </DefaultButton>
  );
}

import React, { MouseEventHandler, JSX } from 'react';

export default function DefaultButton({
  children,
  classess,
  onClick,
}: {
  children: JSX.Element;
  classess: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} type="button" className={classess}>
      {children}
    </button>
  );
}

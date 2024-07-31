/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

type PopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Popover({ open, setOpen, children }: PopoverPropsType) {
  if (!open) {
    return <div className="absolute" />;
  }
  return (
    <div
      className={` fixed top-0 right-0 left-0 z-40 justify-center items-center w-full h-full text-text-main`}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute top-0 w-full h-full text-text-main bg-[rgba(0,0,0,0.3)] backdrop-blur-sm cursor-default"
      />
      {children}
    </div>
  );
}

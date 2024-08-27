/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';

type PopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Popover({ open, setOpen, children }: PopoverPropsType) {
  const closePopover = useCallback(() => setOpen(false), [setOpen]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex justify-center w-full h-full overflow-y-scroll text-text-main">
      <div className="relative w-full h-fit min-h-full">
        <div
          onClick={closePopover}
          className="absolute z-40 w-full h-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm text-start cursor-default"
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative z-50 w-fit h-fit my-20 mx-auto flex bg-background-main rounded-md shadow-lg"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

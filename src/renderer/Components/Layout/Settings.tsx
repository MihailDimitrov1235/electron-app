/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoMdClose } from 'react-icons/io';
import React from 'react';
import ThemeSelector from '../ThemeSelector';

export default function Settings({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        open ? 'visible' : 'hidden'
      }  fixed top-0 right-0 left-0 z-40 justify-center items-center w-full h-full text-text-main`}
    >
      <div
        role="button"
        onClick={() => setOpen(false)}
        className="absolute top-0 w-full h-full text-text-main bg-[rgba(0,0,0,0.3)] backdrop-blur-sm cursor-default"
      />
      <div className=" z-50 relative p-4 w-[1000px] mx-auto">
        <div className="relative rounded-md bg-background-main shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-devider">
            <h3 className="text-xl font-semibold text-text-main ">Settings</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-text-main hover:bg-background-light rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="p-4">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

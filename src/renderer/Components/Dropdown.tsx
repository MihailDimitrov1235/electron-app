/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import Button from './Button';

type DropdownProps = {
  name: String;
  options: String[];
  onSelect: (option: String) => void;
  // eslint-disable-next-line react/require-default-props
  closeOnSelect?: boolean | undefined;
  // eslint-disable-next-line react/require-default-props
  classes?: String;
};

export default function Dropdown({
  name,
  options,
  onSelect,
  closeOnSelect = true,
  classes = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  function handleDropdownClick() {
    setOpen(!open);
  }
  function handleOptionSelect(option: String) {
    onSelect(option);
    if (closeOnSelect) {
      setOpen(false);
    }
  }

  return (
    <div
      className={`${classes} w-fit h-fit text-text-main text-sm font-small gap-2 shadow-md relative`}
    >
      <Button
        onClick={handleDropdownClick}
        classess={`w-full flex items-center justify-between gap-2 ${
          open ? 'rounded-b-none' : ''
        }`}
      >
        {name}{' '}
        <div className=" items-center ">
          {open ? (
            <IoMdArrowDropup size="19px" />
          ) : (
            <IoMdArrowDropdown size="19px" />
          )}
        </div>
      </Button>

      <div
        className={`${
          open ? 'visible' : 'hidden'
        } z-10 bg-background-main rounded-b-md flex flex-col absolute w-full shadow-md`}
      >
        {options.map((option, index) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            className={`${
              index === options.length - 1 && 'rounded-b-md'
            } text-start px-5 py-2 w-full border border-transparent hover:border-background-dark`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

type DropdownProps = {
  name: String;
  options: String[];
  onSelect: (option: String) => void;
  // eslint-disable-next-line react/require-default-props
  closeOnSelect?: boolean | undefined;
};

export default function Dropdown({
  name,
  options,
  onSelect,
  closeOnSelect = true,
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
    <div className=" w-fit h-fit text-text text-sm font-small gap-2 shadow-md">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${
          !open ? 'rounded-md' : 'rounded-t-md'
        }  bg-background w-full border border-transparent hover:border-backgroundDark box-border px-5 py-2.5 flex items-center, justify-between gap-2`}
        type="button"
        onClick={handleDropdownClick}
      >
        {name}{' '}
        <div className=" items-center ">
          {open ? (
            <IoMdArrowDropup size="19px" />
          ) : (
            <IoMdArrowDropdown size="19px" />
          )}
        </div>
      </button>

      <div
        id="dropdown"
        className={`${
          open ? 'visible' : 'hidden'
        } z-10 bg-background rounded-b-md flex flex-col`}
      >
        {options.map((option, index) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            className={`${
              index == options.length - 1 && 'rounded-b-md'
            } text-start px-5 py-2 w-full border border-transparent hover:border-backgroundDark`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

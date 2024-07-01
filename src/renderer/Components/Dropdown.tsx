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
    <div className=" w-fit text-black text-sm font-small gap-2">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${
          !open ? 'rounded-md' : 'rounded-t-md border-b-[1px]'
        }  bg-white border-2 border-primary w-full hover:bg-gray-50 focus:outline-none px-5 py-2.5 flex items-center, justify-between gap-2`}
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
        } z-10 bg-white rounded-b-md border-t-0 border-2 border-primary shadow flex flex-col`}
      >
        {options.map((option, index) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            className=" text-start px-5 py-2 hover:bg-gray-50 w-full"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

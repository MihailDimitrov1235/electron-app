/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import Button from './Button';

type DropdownProps = {
  name: string;
  options: string[];
  onSelect: (option: string) => void;
  closeOnSelect?: boolean | undefined;
  capitalize?: boolean;
  className?: string;
  buttonsClassName?: string;
};

export default function Dropdown({
  name,
  options,
  onSelect,
  closeOnSelect = true,
  capitalize = false,
  className = '',
  buttonsClassName = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  function handleDropdownClick() {
    setOpen(!open);
  }
  function handleOptionSelect(option: string) {
    onSelect(option);
    if (closeOnSelect) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={`${className} w-fit h-fit text-text-main text-sm font-small gap-2 relative `}
    >
      <Button
        uppercase={false}
        onClick={handleDropdownClick}
        className={`w-full flex items-center justify-between gap-2 focus:border-text-main ${
          open ? 'rounded-b-none' : ''
        } ${capitalize && 'capitalize'} ${buttonsClassName}`}
      >
        {capitalize
          ? name.replaceAll('_', ' ').toLowerCase()
          : name.replaceAll('_', ' ')}
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
        } z-10 bg-background-main rounded-b-md flex flex-col absolute w-full shadow-lg space-y-[1px] pt-[1px] `}
      >
        {options.map((option, index) => (
          <Button
            key={index}
            type="button"
            className={`${index === options.length - 1 && 'rounded-b-md'} ${
              capitalize && 'capitalize'
            } rounded-none !justify-start px-3 py-2 w-full border border-transparent hover:border-background-dark ${buttonsClassName}`}
            onClick={() => handleOptionSelect(option)}
          >
            {capitalize
              ? option.replaceAll('_', ' ').toLowerCase()
              : option.replaceAll('_', ' ')}
          </Button>
        ))}
      </div>
    </div>
  );
}

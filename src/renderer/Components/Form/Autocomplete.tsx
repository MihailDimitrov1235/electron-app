/* eslint-disable react/require-default-props */
import React, { useState, useEffect, useMemo } from 'react';
import { FaCheckSquare } from 'react-icons/fa';

type AutocompleteProps<T> = {
  options: T[];
  onSelect: (option: T) => void;
  onRemove: (option: T) => void;
  onRemoveAll: () => void;
  selectedOptions: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
  placeholder?: string;
  className?: string;
};

export default function Autocomplete<T>({
  options,
  onSelect,
  onRemove,
  onRemoveAll,
  selectedOptions,
  getOptionLabel,
  getOptionValue,
  placeholder = 'Type to search...',
  className = '',
}: AutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        getOptionLabel(option).toLowerCase().includes(inputValue.toLowerCase()),
      ),
    [options, inputValue, getOptionLabel],
  );

  const isOptionSelected = (option: T) =>
    selectedOptions.some(
      (selected) => getOptionValue(selected) === getOptionValue(option),
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: T) => {
    setInputValue('');
    if (isOptionSelected(option)) {
      onRemove(option);
    } else {
      onSelect(option);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative w-full flex gap-2 items-center px-2 py-2 bg-background-main border-background-dark rounded-md focus:outline-none focus:ring-1 focus:ring-text-main ${className}`}
      ref={inputRef}
    >
      <div className=" flex w-fit gap-2 overflow-y-hidden flex-shrink-0 text-xs">
        {selectedOptions[0] && (
          <button
            type="button"
            // key={getOptionValue(option)}
            onClick={() => onRemove(selectedOptions[0])}
            className="bg-primary text-primary-background px-1 rounded-full flex items-center gap-2"
          >
            <span className="line-clamp-1 max-w-20">
              {getOptionLabel(selectedOptions[0])}
            </span>
          </button>
        )}
        {selectedOptions.length > 1 && (
          <div className="bg-primary text-primary-background px-2 rounded-full flex items-center gap-2">
            <span className="line-clamp-1">+{selectedOptions.length - 1}</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
        />
      </div>

      {selectedOptions.length > 0 && (
        <button onClick={onRemoveAll} type="button">
          &times;
        </button>
      )}

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute w-full top-11 left-0 flex flex-col bg-background-main border border-background-dark rounded-md shadow-md max-h-60 overflow-auto z-10">
          {filteredOptions.map((option) => (
            <button
              type="button"
              key={getOptionValue(option)}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-background-dark/50 text-start flex items-center justify-between"
            >
              <span>{getOptionLabel(option)}</span>
              <span>{isOptionSelected(option) && <FaCheckSquare />}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

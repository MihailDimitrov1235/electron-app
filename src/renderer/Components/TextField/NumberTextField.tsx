import setValueIfNumber from '@Utils/setValueIfNumber';
import React, { ChangeEvent, useState } from 'react';
import { type TextFieldPropsType } from '.';

export default function NumberTextfield({
  title,
  onChange,
  value,
  number,
  endElement,
  className = '',
}: TextFieldPropsType) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };
  return (
    <div
      className={`w-full flex justify-between rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-text-main group focus-within:ring-1 ${className}`}
    >
      <input
        className="bg-background-main flex-1 ring-0 outline-0"
        type="text"
        placeholder={title}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() =>
          setValueIfNumber({
            newValue: inputValue,
            setInput: setInputValue,
            validValue: value,
            setValidValue: onChange,
            min: number?.min || 0,
            max: number?.max || 9999,
            digitsAfterDecimal: number?.digitsAfterDecimal || 0,
          })
        }
      />
      {endElement}
    </div>
  );
}

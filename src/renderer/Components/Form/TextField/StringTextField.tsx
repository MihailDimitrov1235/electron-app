import React, { ChangeEvent, forwardRef } from 'react';
import { type TextFieldPropsType } from '.';

const StringTextfield = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ title, onChange, value, className = '', onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        value={value}
        className={`w-full rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-0 outline-0 ring-text-main focus:ring-1 ${className}`}
      />
    );
  },
);

export default StringTextfield;

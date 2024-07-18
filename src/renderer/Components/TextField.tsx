/* eslint-disable react/require-default-props */
import React from 'react';

type TextFieldPropsType = {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

function TextField({
  title,
  onChange,
  value,
  className = '',
}: TextFieldPropsType) {
  return (
    <input
      type="text"
      placeholder={title}
      onChange={onChange}
      value={value}
      className={`w-full rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-0 outline-0 ring-text-main focus:ring-1 ${className}`}
    />
  );
}

export default TextField;

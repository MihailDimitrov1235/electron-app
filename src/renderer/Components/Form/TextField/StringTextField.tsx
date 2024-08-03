import { ChangeEvent } from 'react';
import { type TextFieldPropsType } from '.';

export default function StringTextfield({
  title,
  onChange,
  value,
  className = '',
}: TextFieldPropsType) {
  return (
    <input
      type="text"
      placeholder={title}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      value={value}
      className={`w-full rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-0 outline-0 ring-text-main focus:ring-1 ${className}`}
    />
  );
}

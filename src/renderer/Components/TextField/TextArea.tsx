import React, { ChangeEvent } from 'react';
import { type TextFieldPropsType } from '.';

export default function TextArea({
  title,
  onChange,
  value,
  className = '',
  textarea,
}: TextFieldPropsType) {
  return (
    <textarea
      rows={textarea?.rows}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
      }}
      value={value}
      className={`w-full rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-0 outline-0 ring-text-main focus:ring-1 ${className}`}
      placeholder={title}
    />
  );
}

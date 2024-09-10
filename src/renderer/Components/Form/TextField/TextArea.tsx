import React, { ChangeEvent, forwardRef } from 'react';
import { type TextFieldPropsType } from '.';

const TextArea = forwardRef<HTMLTextAreaElement, TextFieldPropsType>(
  ({ title, onChange, value, className = '', textarea }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={textarea?.rows}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e.target.value);
        }}
        value={value}
        className={`${
          textarea?.expandable ? 'resize-y' : 'resize-none'
        } w-full overflow-hidden rounded-md p-2 text-text-main bg-background-main border border-background-dark shadow-md ring-0 outline-0 ring-text-main focus:ring-1 ${className}`}
        placeholder={title}
      />
    );
  },
);

export default TextArea;

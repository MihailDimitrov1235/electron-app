import React from 'react';

type CheckboxProps = {
  checked: boolean;
  onCheck: () => void;
  label: string;
};

export default function Checkbox({ checked, onCheck, label }: CheckboxProps) {
  return (
    <div className="flex items-center mb-4 gap-2">
      <input
        type="checkbox"
        onChange={() => onCheck()}
        checked={checked}
        className="w-4 aspect-square rounded-md accent-primary transition ease-in-out delay-150"
      />
      <span className="text-text-main text-base">{label}</span>
    </div>
  );
}

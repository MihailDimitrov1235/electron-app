import React from 'react';

type SwitchProps = {
  checked: boolean;
  onCheck: () => void;
  label: string;
};

export default function Switch({ checked, onCheck, label }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={() => onCheck()}
      className="inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-background-main rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
      <span className="ms-3 text-sm font-medium text-text-main">{label}</span>
    </button>
  );
}

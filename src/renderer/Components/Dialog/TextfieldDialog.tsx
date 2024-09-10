import Button from '@Components/Form/Button';
import TextField from '@Components/Form/TextField';
import Popover from '@Components/Popover';
import { useState } from 'react';

/* eslint-disable react/require-default-props */
type DialogOptions = {
  handleClose?: (result: string) => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  textFieldTitle?: string;
};

export default function TextfieldDialog({
  handleClose,
  title,
  message,
  confirmLabel,
  cancelLabel,
  textFieldTitle,
}: DialogOptions) {
  const [value, setValue] = useState('');
  if (!handleClose) {
    return <div>handleClose is missing</div>;
  }

  return (
    <Popover
      open
      setOpen={() => {
        handleClose('');
      }}
    >
      <div className=" bg-background-main text-text-main p-6 rounded-md shadow-md w-96 flex flex-col gap-4 ">
        <span className="text-xl font-bold">{title}</span>
        <span className="">{message}</span>
        <TextField
          title={textFieldTitle || title}
          onChange={setValue}
          value={value}
        />
        <div className="flex justify-end space-x-2">
          <Button onClick={() => handleClose('')}>
            {cancelLabel || 'Cancel'}
          </Button>
          <Button variant="gradient" onClick={() => handleClose(value)}>
            {confirmLabel || 'Confirm'}
          </Button>
        </div>
      </div>
    </Popover>
  );
}

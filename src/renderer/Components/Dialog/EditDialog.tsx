/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import ActivityReplyPreview from '@Components/Card/Activities/ActivityReplyPreview';
import Button from '@Components/Form/Button';
import Switch from '@Components/Form/Switch';
import Popover from '@Components/Popover';
import RichTextEditor from '@Components/RichTextEditor';
import { useState } from 'react';

/* eslint-disable react/require-default-props */
type DialogOptions = {
  handleClose?: (result: string) => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  textFieldTitle?: string;
  initialValue: string;
  previewType: 'reply' | null;
};

export default function EditDialog({
  handleClose,
  title,
  message,
  confirmLabel,
  cancelLabel,
  textFieldTitle,
  initialValue,
  previewType,
}: DialogOptions) {
  const [value, setValue] = useState(initialValue);
  const [preview, setPreview] = useState(false);
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
      <div className="w-[834px] bg-background-dark text-text-main p-6 rounded-md shadow-md flex flex-col gap-4">
        <span className="text-xl font-bold">{title}</span>
        <span className="">{message}</span>
        <Switch
          checked={preview}
          onCheck={() => setPreview((prev) => !prev)}
          label="Preview"
        />
        {preview ? (
          previewType === 'reply' ? (
            <ActivityReplyPreview text={value} />
          ) : null
        ) : (
          <RichTextEditor
            title={textFieldTitle || title}
            setValue={setValue}
            value={value}
            expandable
            rows={10}
          />
        )}

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

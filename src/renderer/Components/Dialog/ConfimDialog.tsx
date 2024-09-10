import Button from '@Components/Form/Button';
import Popover from '@Components/Popover';

/* eslint-disable react/require-default-props */
type DialogOptions = {
  handleClose?: (result: boolean) => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

export default function ConfirmDialog({
  handleClose,
  title,
  message,
  confirmLabel,
  cancelLabel,
}: DialogOptions) {
  if (!handleClose) {
    return <div>handleClose is missing</div>;
  }
  return (
    <Popover
      open
      setOpen={() => {
        handleClose(false);
      }}
    >
      <div className="bg-background-main text-text-main p-6 rounded-md shadow-md w-96 flex flex-col ">
        <span className="text-xl font-bold mb-4">{title}</span>
        <span className="mb-6">{message}</span>
        <div className="flex justify-end space-x-2">
          <Button onClick={() => handleClose(false)}>
            {cancelLabel || 'Cancel'}
          </Button>
          <Button variant="gradient" onClick={() => handleClose(true)}>
            {confirmLabel || 'Confirm'}
          </Button>
        </div>
      </div>
    </Popover>
  );
}

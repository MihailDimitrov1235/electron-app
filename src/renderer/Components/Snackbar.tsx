import { useState, forwardRef, useCallback } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { TiTick } from 'react-icons/ti';
import { MdError } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { IoIosWarning } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';

type SnackbarProps = {
  allowDownload?: boolean;
} & CustomContentProps;

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ id, variant, message, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    const variantClassName = {
      default: 'bg-primary',
      error: 'bg-red-700',
      success: 'bg-green-600',
      warning: 'bg-orange-500',
      info: 'bg-blue-300',
    };

    const variantIcon = {
      default: '',
      error: <MdError />,
      success: <TiTick size={24} />,
      warning: <IoIosWarning />,
      info: <FaInfoCircle />,
    };

    return (
      <SnackbarContent ref={ref}>
        <div
          className={` flex justify-between w-full p-4 rounded-md items-center shadow-md text-white ${variantClassName[variant]}`}
        >
          <div className="flex gap-2 items-center">
            <span>{variantIcon[variant]}</span> <span>{message}</span>
          </div>
          <button type="button" onClick={handleDismiss}>
            <IoClose size={20} />
          </button>
        </div>
      </SnackbarContent>
    );
  },
);

export default Snackbar;

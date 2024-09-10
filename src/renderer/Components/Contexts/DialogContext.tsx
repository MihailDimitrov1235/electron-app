/* eslint-disable react/jsx-props-no-spreading */
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';

type DialogId = string;

type DialogContextType = {
  showDialog: <R>(DialogElement: React.ReactElement) => Promise<R>;
  closeDialog: (id: DialogId) => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

type DialogProviderProps = {
  children: ReactNode;
};

type DialogState = {
  [id: DialogId]: {
    element: React.ReactElement;
    resolve: (value: any) => void;
  };
};

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialogs, setDialogs] = useState<DialogState>({});

  const showDialog = useCallback(
    <R,>(DialogElement: React.ReactElement): Promise<R> => {
      return new Promise<R>((resolve) => {
        const id = Math.random().toString(36).substr(2, 9);
        const handleClose = (result: any) => {
          setDialogs((prevDialogs) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [id]: removedDialog, ...rest } = prevDialogs;
            return rest;
          });
          resolve(result);
        };
        const Dialog = React.cloneElement(DialogElement, { handleClose });
        setDialogs((prevDialogs) => ({
          ...prevDialogs,
          [id]: { element: Dialog, resolve },
        }));
      });
    },
    [],
  );

  const closeDialog = useCallback((id: DialogId) => {
    setDialogs((prevDialogs) => {
      const { [id]: removedDialog, ...rest } = prevDialogs;
      if (removedDialog) {
        removedDialog.resolve(undefined);
      }
      return rest;
    });
  }, []);

  const contextValue = useMemo(
    () => ({ showDialog, closeDialog }),
    [showDialog, closeDialog],
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {Object.entries(dialogs).map(([id, { element }]) =>
        ReactDOM.createPortal(
          element,
          document.getElementById('App') || document.body,
          id,
        ),
      )}
    </DialogContext.Provider>
  );
}

export const useDialog = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

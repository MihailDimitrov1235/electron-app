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

type DialogContextType = {
  showDialog: <R>(DialogElement: React.ReactElement) => Promise<R>;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

type DialogProviderProps = {
  children: ReactNode;
};

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialog, setDialog] = useState<ReactNode | null>(null);

  const showDialog = useCallback(
    <R,>(DialogElement: React.ReactElement): Promise<R> => {
      return new Promise<R>((resolve) => {
        const handleClose = (result: any) => {
          setDialog(null);
          resolve(result);
        };

        const Dialog = React.cloneElement(DialogElement, { handleClose });

        setDialog(Dialog);
      });
    },
    [],
  );

  const contextValue = useMemo(() => ({ showDialog }), [showDialog]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {dialog &&
        ReactDOM.createPortal(
          dialog,
          document.getElementById('App') || document.body,
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

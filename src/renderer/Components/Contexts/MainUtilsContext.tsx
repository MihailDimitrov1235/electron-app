import React, { createContext, useContext, useMemo } from 'react';

type MainUtilsContextType = {
  openUrl: (url: string) => void;
};

const MainUtilsContext = createContext<MainUtilsContextType | undefined>(
  undefined,
);

export function MainUtilsProvider({ children }: { children: React.ReactNode }) {
  const openUrl = async (url: string) => {
    try {
      await window.electronAPI.openUrl(url);
      console.log('URL opened successfully');
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };
  const value = useMemo(
    () => ({
      openUrl,
    }),
    [],
  );

  return (
    <MainUtilsContext.Provider value={value}>
      {children}
    </MainUtilsContext.Provider>
  );
}

export const useMainUtils = (): MainUtilsContextType => {
  const context = useContext(MainUtilsContext);
  if (context === undefined) {
    throw new Error('useMainUtils must be used within a MainUtilsProvider');
  }
  return context;
};

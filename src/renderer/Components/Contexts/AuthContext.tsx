import React, { createContext, useContext, useState, useMemo } from 'react';

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    const storageToken = localStorage.getItem('token');
    return storageToken;
  });
  function changeToken(tok: string | null) {
    if (tok === null) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', tok);
    }
    setToken(tok);
  }
  const value = useMemo(
    () => ({
      token,
      setToken: changeToken,
    }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

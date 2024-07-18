import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../Contexts/AuthContext';
import Topbar from './Topbar';

export default function Layout() {
  const { setToken } = useAuth();
  useEffect(() => {
    const removeListener = window.electronAPI.handleSetToken((message) => {
      setToken(message);
    });

    return () => {
      removeListener();
    };
  });
  return (
    <div className="w-full h-full flex flex-col bg-background-dark overflow-hidden">
      <Topbar />
      <div className="w-full h-full flex bg-background-dark overflow-hidden">
        <Sidebar />
        <div className="w-full h-full overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

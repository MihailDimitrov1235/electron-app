import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../Contexts/AuthContext';

export default function Layout() {
  const { setToken } = useAuth();
  useEffect(() => {
    const removeListener = window.electronAPI.handleSetToken((message) => {
      setToken(message);
    });

    // Clean up function to remove the listener when the component unmounts
    return () => {
      removeListener();
    };
  });
  return (
    <div className="w-full h-full flex bg-background-dark">
      <Sidebar />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

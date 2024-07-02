import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

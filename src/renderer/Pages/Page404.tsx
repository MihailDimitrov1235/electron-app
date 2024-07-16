import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Page404() {
  const location = useLocation();
  return <div>404 {location.pathname}</div>;
}

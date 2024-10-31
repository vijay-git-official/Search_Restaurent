import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />  {/* This is where the routed content will render */}

    </div>
  );
};

export default Layout;

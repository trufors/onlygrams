import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="work-area">
        <div className="work-area__inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../Components/Nav/Nav';

export const Layout: React.FC<{}> = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

import { Outlet } from 'react-router-dom';
import  AppBar  from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { LayoutContainer } from './App.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
export default Layout;
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Logo from 'components/Logo/Logo';

// обгортка
const Layout = () => {
  return (
    <div className="container">
      <Header>
        <Logo />
      </Header>
      <Suspense fallback={<div>🚧Loading...🚛 </div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

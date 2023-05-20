import style from './Layout.module.css';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <NavLink activeClassName={style.activeLink} to="/">
          Home page
        </NavLink>
        <NavLink activeClassName={style.activeLink} to="/tweets">
          Tweets
        </NavLink>
      </header>
      <main className={style.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

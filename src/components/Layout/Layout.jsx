import style from './Layout.module.css';
import './style.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'inactiveLink'
          }
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'inactiveLink'
          }
          to="/tweets"
        >
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

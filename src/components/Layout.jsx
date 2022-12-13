import {NavLink, Outlet} from "react-router-dom";
import React from 'react';

const Layout = () => {
  const setActive = ({isActive}) => isActive ? 'active-link' : ''

  return (
    <div className='wrapper'>

      <header className='header'>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/blog" className={setActive}>Blog</NavLink>
        <NavLink to="/about" className={setActive}>About</NavLink>
      </header>

      <main className="main">
        <Outlet/>
      </main>

      <footer className='footer'>
        <p>My first React Router v6 app.</p>
        <p>
          <a href="https://github.com/zhuk1707/react-router-first-app">
            Zhuk1707
          </a>, 2022
        </p>
      </footer>

    </div>
  );
};

export default Layout;
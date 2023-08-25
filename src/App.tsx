import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import styles from './components/Site.module.css';
import { useWindowSize } from './helpers/useWindowSize';

function App() {
  const size = useWindowSize()

  return (
    <>
      <div className={ styles.header }><h1>HEADER</h1></div>
      <div className={ styles.body }>
        {
          size > 1000
            ? <div className={ styles.nav }>
              <div>
                <NavLink to={ '/page/0' } className={ ({ isActive }) => isActive ? styles.active : styles.navLink }>
                  PAGE 1
                </NavLink>
              </div>
              <div>
                <NavLink to={ '/page/1' } className={ ({ isActive }) => isActive ? styles.active : styles.navLink }>
                  PAGE 2
                </NavLink>
              </div>
              <div>
                <NavLink to={ '/page/2' } className={ ({ isActive }) => isActive ? styles.active : styles.navLink }>
                  PAGE 3
                </NavLink>
              </div>
              <div>
                <NavLink to={ '/protected' } className={ ({ isActive }) => isActive ? styles.active : styles.navLink }>
                  protected PAGE
                </NavLink>
              </div>
            </div>
            : <div></div>
        }

        <div className={ styles.content }>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;

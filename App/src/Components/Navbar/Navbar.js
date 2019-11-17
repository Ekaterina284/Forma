import React from 'react';
import p from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <nav className={p.Navbar}>
        <ul className={p.menu}>
          <li className={p.menu__item}>
            <Link to="/login" activeClassName="active">
              {t('log')}
            </Link>
          </li>
          <li className={p.menu__item}>
            <Link to="/register" activeClassName="active">
              {t('register')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;

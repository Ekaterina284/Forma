import React from 'react';
import p from './Navbar.module.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className={p.Navbar}>
      <ul className={p.menu}>
        <li className={p.menu__item}>
          <a href="/login">{t('log')}</a>
        </li>
        <li className={p.menu__item}>
          <a href="/register">{t('register')}</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

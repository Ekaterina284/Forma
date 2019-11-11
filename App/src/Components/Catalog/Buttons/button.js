import React from 'react';
//import { useTranslation } from 'react-i18next';
import style from '../Buttons/button.module.css';
import menu from '../menu.png';
import add from '../99053.png';
import { NavLink } from 'react-router-dom';

const Add = () => {
  //const { t } = useTranslation();
  return (
    <div>
      <div className={style.btn__menu}>
        <input className={style.btn__input} type="image" src={menu} />
      </div>
      <NavLink to="/add">
        <input
          type="image"
          src={add}
          alt="Button"
          className={style.btn__add}
          onClick='location.href="/add"'
        ></input>
      </NavLink>
    </div>
  );
};
export default Add;

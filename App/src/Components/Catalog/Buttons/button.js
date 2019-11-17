import React from 'react';

import style from '../Buttons/button.module.css';
import menu from '../../../image/menu.png';
import add from '../../../image/99053.png';
import { NavLink } from 'react-router-dom';

const Add = () => {
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

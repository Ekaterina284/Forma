import React from 'react';
import { NavLink } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import style from '../Buttons/button.module.css';
import list from '../../../image/menu.png';
import add from '../../../image/99053.png';
import grid from '../../../image/menu2.png';

function Add() {
  return (
    <div>
      <NavLink to="/catalog">
        <div className={style.btn__menu}>
          <input
            className={style.btn__input}
            type="image"
            src={list}
            alt={list}
          />
        </div>
      </NavLink>
      <NavLink to="/catalog">
        <div className={style.btn__menu}>
          <input
            className={style.btn__input}
            type="image"
            src={grid}
            alt={grid}
          />
        </div>
      </NavLink>

      <NavLink to="/add">
        <label>Add film</label>
        <input
          type="image"
          src={add}
          alt={add}
          className={style.btn__add}
        ></input>
      </NavLink>
    </div>
  );
}
export default Add;

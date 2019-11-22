import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  orientationListActionCreator,
  orientationGridActionCreator
} from './action';
import style from '../Buttons/button.module.css';
import list from '../../../image/menu.png';
import add from '../../../image/99053.png';
import grid from '../../../image/menu2.png';

function Add() {
  const dispatch = useDispatch();
  const onClickListOrientation = event => {
    dispatch(orientationListActionCreator());
  };
  const onClickGridOrientation = event => {
    dispatch(orientationGridActionCreator());
  };

  return (
    <div>
      <div className={style.btn__menu}>
        <input
          className={style.btn__input}
          type="image"
          src={list}
          alt={list}
          onClick={onClickGridOrientation}
        />
      </div>
      <div className={style.btn__menu}>
        <input
          className={style.btn__input}
          type="image"
          src={grid}
          alt={grid}
          onClick={onClickListOrientation}
        />
      </div>

      <NavLink to="/add">
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

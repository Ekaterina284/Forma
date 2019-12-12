import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  orientationListActionCreator,
  orientationGridActionCreator
} from './action';
import button from '../Buttons/button.module.css';
import list from '../../../image/menu.png';
import add from '../../../image/99053.png';
import grid from '../../../image/menu2.png';

function Button() {
  const dispatch = useDispatch();
  const handleListOrientationClick = event => {
    dispatch(orientationListActionCreator());
  };
  const handleGridOrientationClick = event => {
    dispatch(orientationGridActionCreator());
  };

  return (
    <div>
      <div className={button.btn__menu}>
        <input
          className={button.btn__input}
          type="image"
          src={list}
          alt={list}
          onClick={handleGridOrientationClick}
        />
      </div>
      <div className={button.btn__menu}>
        <input
          className={button.btn__input}
          type="image"
          src={grid}
          alt={grid}
          onClick={handleListOrientationClick}
        />
      </div>

      <NavLink to="/add">
        <input
          type="image"
          src={add}
          alt={add}
          className={button.btn__add}
        ></input>
      </NavLink>
    </div>
  );
}
export default Button;

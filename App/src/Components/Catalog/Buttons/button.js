import React from 'react';
import { NavLink } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import style from '../Buttons/button.module.css';
import list from '../../../image/menu.png';
import add from '../../../image/99053.png';
import grid from '../../../image/menu2.png';
import { useSelector } from 'react-redux';
import q from '../Buttons/movie.module.css';

function Add() {
  const film = useSelector(state => state.movie.MovieData);
  const movies = film.map(cinema => {
    return (
      <div key={cinema.id} className={q.movie__op}>
        <img className={q.movie__photo} src={cinema.photo} alt={cinema.photo} />

        <div>{cinema.name}</div>
        <div>{cinema.year}</div>
        <div>{cinema.author}</div>
      </div>
    );
  });

  return (
    <div>
      <div className={style.btn__menu}>
        <input
          className={style.btn__input}
          type="image"
          src={list}
          alt={list}
        />
      </div>

      <div className={style.btn__menu}>
        <input
          className={style.btn__input}
          type="image"
          src={grid}
          onClick={movies}
          alt={grid}
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

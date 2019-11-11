import React from 'react';
//import { useTranslation } from 'react-i18next';
import q from './movie.module.css';
//import Category from '../Category/Category';
//import ActionLink from '../Buttons/button';

//import { NavLink } from 'react-router-dom';

function MovieList(props) {
  // const { t } = useTranslation();

  const CinemaList = props.Movies.map(cinema => (
    <div className={q.movie__op}>
      <img className={q.movie__photo} src={cinema.photo} />

      <div className={q.movie__opisanie}>
        <div>{cinema.name} </div>
        <div> {cinema.year}</div>
        <div>{cinema.author}</div>
      </div>
    </div>
  ));
  return <div>{CinemaList}</div>;
}
export default MovieList;

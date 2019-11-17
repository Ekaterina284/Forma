import React from 'react';
//import { bindActionCreators } from 'redux';

import q from '../Catalog/movie.module.css';
import { useDispatch, useSelector } from 'react-redux';

function CinemaList() {
  //const dispatch = useDispatch();
  const film = useSelector(state => state.films);
  const movies = film.map(cinema => {
    return (
      <div key={cinema.id} className={q.movie__op}>
        <img className={q.movie__photo} src={cinema.photo} />

        <div>{cinema.name}</div>
        <div>{cinema.year}</div>
        <div>{cinema.author}</div>
      </div>
    );
  });

  return <div className={q}>{movies}</div>;
}

export default CinemaList;

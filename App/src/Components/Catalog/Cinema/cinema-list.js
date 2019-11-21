import React from 'react';
import { useSelector } from 'react-redux';
import q from '../Cinema/movie.module.css';

function CinemaList() {
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
  return <div className={q}>{movies}</div>;
}
export default CinemaList;

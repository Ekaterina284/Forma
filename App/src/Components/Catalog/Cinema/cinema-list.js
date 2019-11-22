import React from 'react';
import { useSelector } from 'react-redux';
import q from '../Cinema/movie.module.css';
import s from '../Buttons/movieListorient.module.css';

function CinemaList() {
  const film = useSelector(state => state.movie.MovieData);
  const categ = useSelector(state => state.movie.viewCategory);
  const orient = useSelector(state => state.movie.orientation);
  const movies = film.map(cinema => {
    if (orient === 'LIST') {
      if (categ === cinema.Category || categ === '') {
        return (
          <div key={cinema.id} className={q.movie__op}>
            <img
              className={q.movie__photo}
              src={cinema.photo}
              alt={cinema.photo}
            />

            <div>{cinema.name}</div>
            <div>{cinema.year}</div>
            <div>{cinema.author}</div>
            <div>{cinema.Category}</div>
          </div>
        );
      }
    } else {
      if (categ === cinema.Category || categ === '') {
        return (
          <div key={cinema.id} className={s.movie__op}>
            <img
              className={s.movie__photo}
              src={cinema.photo}
              alt={cinema.photo}
            />
            <div>{cinema.name}</div>
            <div>{cinema.year}</div>
            <div>{cinema.author}</div>
            <div>{cinema.Category}</div>
          </div>
        );
      }
    }
  });
  return <div>{movies}</div>;
}
export default CinemaList;

import React from 'react';
import { useSelector } from 'react-redux';
import cinemaListStyle from './CinemaList.module.css';
import movieListStyle from '../Buttons/movieListorient.module.css';
import * as axios from 'axios';

function CinemaList() {
  const film = useSelector(state => state.movie.movieData);
  const categ = useSelector(state => state.movie.viewCategory);
  const orient = useSelector(state => state.movie.orientation);

  axios
    .get('http://localhost:3001/catalog')
    .then(response => console.log(response));

  const movies = film.map(cinema => {
    if (orient === 'LIST') {
      if (categ === cinema.category || categ === '') {
        return (
          <div key={cinema.id} className={cinemaListStyle.movie__op}>
            <img
              className={cinemaListStyle.movie__photo}
              src={cinema.photo}
              alt={cinema.photo}
            />

            <div>{cinema.name}</div>
            <div>{cinema.year}</div>
            <div>{cinema.author}</div>
            <div>{cinema.category}</div>
          </div>
        );
      }
    } else {
      if (categ === cinema.category || categ === '') {
        return (
          <div key={cinema.id} className={movieListStyle.movie__op}>
            <img
              className={movieListStyle.movie__photo}
              src={cinema.photo}
              alt={cinema.photo}
            />
            <div>{cinema.name}</div>
            <div>{cinema.year}</div>
            <div>{cinema.author}</div>
            <div>{cinema.category}</div>
          </div>
        );
      }
    }
  });
  return <div>{movies}</div>;
}
export default CinemaList;

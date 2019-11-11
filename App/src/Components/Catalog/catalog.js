import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Category from './Category/Category';
import a from './catalog.module.css';
import MovieList from './Movie/movie';
import Add from './Buttons/button';

const Catalog = props => {
  return (
    <BrowserRouter>
      <div>
        <div className={a.app__catalog}>
          <div className={a.column__1}>
            <Category
              CategoryData={props.CategoryPage.CategoryData}
              newPostText={props.CategoryPage.newPostText}
              dispatch={props.dispatch}
            />
          </div>
          <div className={a.column__2}>
            <MovieList Movies={props.MoviesPage.Movies} />
          </div>
          <div className={a.column__3}>
            <Add />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Catalog;

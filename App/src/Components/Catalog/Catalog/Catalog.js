import React from 'react';
import CinemaList from '../Cinema/cinema-list';
import CategoryList from '../../Catalog/Category/category-list';
import q from '../Catalog/catalog.module.css';
import Add from '../Buttons/button';

const WebPage = () => (
  <div>
    <div className={q.column__1}>
      <CategoryList />
    </div>
    <div className={q.column__2}>
      <CinemaList />
    </div>
    <div className={q.column__3}>
      <Add />
    </div>
  </div>
);

export default WebPage;

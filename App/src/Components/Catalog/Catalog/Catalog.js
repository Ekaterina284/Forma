import React from 'react';
import CinemaList from '../CinemaList/CinemaList';
import q from '../Catalog/catalog.module.css';
import Button from '../Buttons/button';
import CategoryList from '../CategoryList/CategoryList';

const Catalog = () => (
  <div>
    <div className={q.column__1}>
      <CategoryList />
    </div>
    <div className={q.column__2}>
      <CinemaList />
    </div>
    <div className={q.column__3}>
      <Button />
    </div>
  </div>
);

export default Catalog;

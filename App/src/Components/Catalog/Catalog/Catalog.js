import React from 'react';
import CinemaList from '../CinemaList/CinemaList';
import catalog from '../Catalog/catalog.module.css';
import Button from '../Buttons/button';
import CategoryList from '../CategoryList/CategoryList';

const Catalog = () => (
  <div>
    <div className={catalog.column__1}>
      <CategoryList />
    </div>
    <div className={catalog.column__2}>
      <CinemaList />
    </div>
    <div className={catalog.column__3}>
      <Button />
    </div>
  </div>
);

export default Catalog;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Category/Category.module.css';
import add from '../../../image/99053.png';
import { addCategoryActionCreator } from '../../../store/Category/action';

function CategoryList() {
  const dispatch = useDispatch();
  const categor = useSelector(state => state.category.CategoryData);
  const [categoryActionCreator, setcategoryActionCreator] = useState('');
  const categ = categor.map(cinema => {
    return (
      <div key={cinema.id}>
        <p className={style.link}>{cinema.category}</p>
      </div>
    );
  });
  const onAddCategoryClick = () => {
    dispatch(addCategoryActionCreator(categoryActionCreator));
    setcategoryActionCreator('');
  };

  const onNameChange = event =>
    setcategoryActionCreator(event.currentTarget.value);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      dispatch(addCategoryActionCreator(categoryActionCreator));
      setcategoryActionCreator('');
    }
  };
  const selectcategor = useSelector(state => state.movie.MovieData);

  const selectcateg = selectcategor.map(category => {
    return (
      <div key={category.id}>
        <button>{category.Category}</button>
      </div>
    );
  });

  return (
    <div>
      <br></br>
      <textarea
        onChange={onNameChange}
        value={categoryActionCreator}
        placeholder="Add categories"
        onKeyPress={handleKeyPress}
      ></textarea>
      <input
        type="image"
        src={add}
        alt="Button"
        className={style.btn__add}
        onClick={onAddCategoryClick}
      ></input>

      {categ}
    </div>
  );
}

export default CategoryList;

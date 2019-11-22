import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Category/Category.module.css';
import add from '../../../image/99053.png';
import {
  addCategoryActionCreator,
  selectCategoryActionCreator
} from '../../../store/Category/action';

function CategoryList() {
  const dispatch = useDispatch();
  const categor = useSelector(state => state.category.CategoryData);
  const [categoryActionCreator, setcategoryActionCreator] = useState('');
  const onClickSelect = event => {
    dispatch(selectCategoryActionCreator(event.currentTarget.value));
  };
  const categ = categor.map(cinema => {
    return (
      <div key={cinema.id}>
        <option onClick={onClickSelect} className={style.link}>
          {cinema.category}
        </option>
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

  return (
    <div className={style.column}>
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
        className={style.column__btn__add}
        onClick={onAddCategoryClick}
      ></input>
      {categ}
    </div>
  );
}

export default CategoryList;

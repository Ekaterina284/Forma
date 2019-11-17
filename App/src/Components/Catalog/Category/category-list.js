import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Category/Category.module.css';
import add from '../../../image/99053.png';
import { addCategoryActionCreator } from '../../../store/Category/action';

function CategoryList() {
  const dispatch = useDispatch();
  const categor = useSelector(state => state.category.CategoryData);
  const categ = categor.map(cinema => {
    return <div key={cinema.id}>{cinema.category}</div>;
  });

  const onAddCategoryClick = () => {
    dispatch(addCategoryActionCreator('asdf'));
  };

  return (
    <div>
      <br></br>
      <textarea placeholder="Add categories"></textarea>
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

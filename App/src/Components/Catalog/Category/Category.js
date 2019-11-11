import React from 'react';
import style from './Category.module.css';
//import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import add from '../99053.png';
import {
  addCategoryActionCreator,
  updateNewCategoryActionCreator
} from '../../../Redux/Category-reducer';
const CategoryItem = props => {
  //const { t } = useTranslation();

  return (
    <div className={style.menu__item__new}>
      <NavLink to={'/catalog/' + props.id}>{props.category}</NavLink>
    </div>
  );
};

const Category = props => {
  let CategoryElements = props.CategoryData.map(categories => (
    <CategoryItem category={categories.category} id={categories.id} />
  ));
  let newCategoryElement = React.createRef();

  let addCategory = () => {
    props.dispatch(addCategoryActionCreator());
  };
  let onPostChange = () => {
    let text = newCategoryElement.current.value;
    let action = updateNewCategoryActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={style.menu}>
      <br></br>
      <textarea
        onChange={onPostChange}
        value={props.newPostText}
        ref={newCategoryElement}
        placeholder="Add categories"
      ></textarea>
      <input
        type="image"
        src={add}
        alt="Button"
        className={style.btn__add}
        onClick={addCategory}
      ></input>
      {CategoryElements}
    </div>
  );
};
export default Category;

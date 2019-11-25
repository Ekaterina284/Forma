import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './AddFilm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addFilmActionCreator } from './action';
import { NavLink } from 'react-router-dom';

const AddFilm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [filmActionCreator, setfilmActionCreator] = useState({
    photo: '',
    name: '',
    year: '',
    author: '',
    category: ''
  });

  const categor = useSelector(state => state.category.categoryData);
  const categ = categor.map(cinema => {
    return <option key={cinema.id}>{cinema.category}</option>;
  });
  const onAddFilmClick = () => {
    dispatch(addFilmActionCreator(filmActionCreator));
  };
  const onFilmChange = event =>
    setfilmActionCreator({
      ...filmActionCreator,
      [event.target.name]: event.target.value
    });

  return (
    <div>
      <form action="/catalog" className={style.form__film} method="get">
        <div>
          <label className={style.form__label__1} for="scales">
            Cinema Name:
          </label>
          <input
            className={style.form__input}
            required
            type="text"
            name="name"
            placeholder={t('cinemaname')}
            onChange={onFilmChange}
          />
        </div>
        <div>
          <label className={style.form__label__2} for="scales">
            Year:
          </label>
          <input
            className={style.form__input}
            required
            type="date"
            name="year"
            placeholder={t('year')}
            onChange={onFilmChange}
          />
        </div>
        <div>
          <label className={style.form__label__3} for="scales">
            Author:
          </label>
          <input
            className={style.form__input}
            required
            type="text"
            name="author"
            placeholder={t('author')}
            onChange={onFilmChange}
          />
        </div>
        <div>
          <label className={style.form__label__1} for="scales">
            Photo:
          </label>
          <input
            className={style.form__input}
            required
            type="file"
            name="photo"
            placeholder={t('cinemaname')}
            onChange={onFilmChange}
          />
        </div>

        <label className={style.form__select}>Category:</label>
        <select
          className={style.category}
          name="category"
          onChange={onFilmChange}
        >
          {categ}
        </select>
        <br />
        <br />
        <input type="checkbox" className={style.checkbox} />
        <label>Load cinema info from Api</label>
        <br />

        <NavLink to="/catalog">
          <input
            type="submit"
            className={style.form__btn}
            onClick={onAddFilmClick}
            value={t('Add')}
          />
        </NavLink>
      </form>
    </div>
  );
};

export default AddFilm;

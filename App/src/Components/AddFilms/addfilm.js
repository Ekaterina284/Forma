import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../AddFilms/addfilm.module.css';
import { useSelector } from 'react-redux';

const Film = () => {
  const { t } = useTranslation();
  const categor = useSelector(state => state.category.CategoryData);
  const categ = categor.map(cinema => {
    return <option key={cinema.id}>{cinema.category}</option>;
  });

  return (
    <div>
      <form className={style.form__film} method="post">
        <p>
          <label className={style.opisanie__input} for="scales">
            Cinema Name:
          </label>
          <input
            className={style.form__input}
            required
            type="text"
            name="firstname"
            placeholder={t('cinemaname')}
          />
        </p>

        <label className={style.opisanie__option}>Category:</label>
        <select className={style.category}>
          <option>Сhoose a category</option>
          {categ}
        </select>
        <br />
        <br />
        <input type="checkbox" className={style.checkbox} />
        <label>Load cinema info from Api</label>
        <br />
        <input type="submit" className={style.form__btn} value={t('Create')} />
      </form>
    </div>
  );
};

export default Film;

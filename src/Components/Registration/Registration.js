import React, { useState } from 'react';
import registr from './Registration.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { registerAction } from './action';
import { NavLink } from 'react-router-dom';

const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [registerActionCreator, setregisterActionCreator] = useState({
    name: '',
    password: ''
  });
  const onRegisterClick = () => {
    dispatch(registerAction(registerActionCreator));
    alert('Пользователь успешно зарегистрирован!!! ');
  };
  const onRegisterChange = event =>
    setregisterActionCreator({
      ...registerActionCreator,
      [event.target.name]: event.target.value
    });
  return (
    <div>
      <p className={registr.title}> {t('register')}</p>
      <form className={registr.form__register} method="post">
        <p>
          <input
            required
            className={registr.form__register__input}
            type="text"
            name="name"
            placeholder={t('username')}
            onChange={onRegisterChange}
          />
        </p>

        <input
          required
          className={registr.form__register__input}
          type="password"
          name="password"
          placeholder={t('pass')}
          onChange={onRegisterChange}
        />

        <br />
        <NavLink to="/login">
          <input
            type="submit"
            className={registr.form__register__btn}
            value={t('register')}
            onClick={onRegisterClick}
          />
        </NavLink>
      </form>
    </div>
  );
};

export default Registration;

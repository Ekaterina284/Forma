import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import login from './Login.module.css';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { authActionCreator } from './action';

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loginActionCreator, setloginActionCreator] = useState({
    name: '',
    password: ''
  });
  const onLoginClick = () => {
    dispatch(authActionCreator(loginActionCreator));
  };
  const onLoginChange = event =>
    setloginActionCreator({
      ...loginActionCreator,
      [event.target.name]: event.target.value
    });
  return (
    <div>
      <p className={login.title}>{t('nameprogram')}</p>
      <form className={login.form__login} method="post">
        <p>
          <input
            className={login.form__login__input}
            required
            type="text"
            name="firstname"
            placeholder={t('username')}
            onChange={onLoginChange}
          />
        </p>

        <input
          className={login.form__login__input}
          required
          type="password"
          name="user"
          placeholder={t('pass')}
          onChange={onLoginChange}
        />
        <br />
        <NavLink to="/catalog">
          <input
            type="submit"
            className={login.form__login__btn}
            value={t('sign')}
            onClick={onLoginClick}
          />
        </NavLink>
      </form>
    </div>
  );
};

export default Login;

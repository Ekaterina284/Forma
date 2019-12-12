import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import login from './Login.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActionCreator } from './action';
//import * as axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loginActionCreator, setloginActionCreator] = useState({
    name: '',
    password: ''
  });
  // axios
  //   .get('http://localhost:3001/login')
  //   .then(response => console.log(response));
  const onLoginClick = event => {
    dispatch(authActionCreator(event.currentTarget.value));
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
            required
            className={login.form__login__input}
            type="text"
            name="name"
            placeholder={t('username')}
            onChange={onLoginChange}
          />
        </p>

        <input
          className={login.form__login__input}
          required
          type="password"
          name="password"
          placeholder={t('pass')}
          onChange={onLoginChange}
        />
        <br />

        <input
          type="submit"
          className={login.form__login__btn}
          value={t('sign')}
          onClick={onLoginClick}
        />
      </form>
    </div>
  );
};

export default Login;

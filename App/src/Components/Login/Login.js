import React from 'react';
import { useTranslation } from 'react-i18next';
import login from './Login.module.css';

const Login = () => {
  const { t } = useTranslation();
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
          />
        </p>

        <input
          className={login.form__login__input}
          required
          type="password"
          name="user"
          placeholder={t('pass')}
        />
        <br />
        <input
          type="submit"
          className={login.form__login__btn}
          value={t('sign')}
        />
      </form>
    </div>
  );
};

export default Login;

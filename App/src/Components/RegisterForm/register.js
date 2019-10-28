import React from 'react';
import d from './register.module.css';
import { useTranslation } from 'react-i18next';
const Registration = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={d.title}> {t('register')}</p>
      <form className={d.form__register} method="post">
        <p>
          <input
            className={d.form__register__input}
            required
            type="text"
            name="firstname"
            placeholder={t('username')}
          />
        </p>

        <input
          className={d.form__register__input}
          required
          type="password"
          name="user"
          placeholder={t('pass')}
        />
        <br />
        <input
          type="submit"
          className={d.form__register__btn}
          value={t('register')}
        />
      </form>
    </div>
  );
};

export default Registration;

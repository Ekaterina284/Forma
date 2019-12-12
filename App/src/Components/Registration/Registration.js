import React from 'react';
import registr from './Registration.module.css';
import { useTranslation } from 'react-i18next';
const Registration = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={registr.title}> {t('register')}</p>
      <form className={registr.form__register} method="post">
        <p>
          <input
            className={registr.form__register__input}
            required
            type="text"
            name="firstname"
            placeholder={t('username')}
          />
        </p>

        <input
          className={registr.form__register__input}
          required
          type="password"
          name="user"
          placeholder={t('pass')}
        />
        <br />
        <input
          type="submit"
          className={registr.form__register__btn}
          value={t('register')}
        />
      </form>
    </div>
  );
};

export default Registration;

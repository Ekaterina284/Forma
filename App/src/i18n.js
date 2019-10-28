import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      log: 'LOGIN',
      register: 'REGISTER',
      logout: 'LOGOUT',
      nameprogram: 'CATALOG MOVIES',
      username: 'Name',
      pass: 'Password',
      cinema: 'Cinema',
      category: 'Category'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

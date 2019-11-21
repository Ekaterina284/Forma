import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      log: 'Login',
      register: 'Registration',
      logout: 'LOGOUT',
      nameprogram: 'Catalog movies',
      username: 'Name',
      pass: 'Password',
      cinema: 'Cinema',
      category: 'Category',
      sign: 'Sign in',
      cinemaname: 'Cinema name',
      create: 'Create',
      author: 'Author',
      year: 'Year',
      Add: 'Аdd movie'
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

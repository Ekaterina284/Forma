const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import { User } from '../entity/Register';
import { getManager } from 'typeorm';
const bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
  console.log('Сериализация: ', user);
  done(null, user.id);
});

passport.deserializeUser(function(name, done) {
  done(null, name);
});

var isValidPassword = function(user, password) {
  return bcrypt.compareSync(password, user.password);
};

const registerRepository = getManager().getRepository(User);

// passport/login.js
passport.use(
  'login',
  new LocalStrategy(
    {
      passReqToCallback: true
    },
    function(req, name, password, done) {
      // проверка в бд, существует ли пользователь с таким логином
      registerRepository.findOne({ name: name }, function(err, user) {
        // В случае возникновения любой ошибки, возврат с помощью метода done
        if (err) return done(err);
        // Пользователь не существует, ошибка входа и перенаправление обратно
        if (!user) {
          console.log('User Not Found with username ' + name);
          return done(null, false, req.flash('message', 'User Not found.'));
        }
        // Пользователь существует, но пароль введен неверно, ошибка входа
        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');
          return done(null, false, req.flash('message', 'Invalid Password'));
        }
        // Пользователь существует и пароль верен, возврат пользователя из
        // метода done, что будет означать успешную аутентификацию
        return done(null, user);
      });
    }
  )
);

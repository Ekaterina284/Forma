import 'reflect-metadata';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
import { createConnection } from 'typeorm';
const session = require('express-session');
const FileStore = require('session-file-store')(session);
//import { Register } from './entity/Register';
import * as cors from 'cors';
import { AppRoutes } from '../src/Router/routes';
import { Request, Response } from 'express';
var flash = require('connect-flash');

createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(cors());
    app.options('*', cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(flash());

    app.use(
      session({
        secret: 'hghtyNN23h',
        store: new FileStore(),
        cookie: {
          path: '/',
          httpOnly: true,
          maxAge: 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false
      })
    );

    require('./controller/passport-local');
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login');

    app.post('/login', (req, res, next) => {
      passport.authenticate('local', function(err, user) {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.send('Укажите правильный email или пароль!');
        }
        req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
          return res.redirect('/catalog');
        });
      })(req, res, next);
    });

    const auth = (req, res, next) => {
      if (req.isAuthenticated()) {
        next();
      } else {
        return res.redirect('/login');
      }
    };
    app.get('/catalog', auth, (req, res) => res.send('Admin'));

    app.get('/logout', (req, res) => {
      req.logout();
      res.redirect('/login');
    });
    // register all application routes
    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    // run app
    app.listen(3001);

    console.log('Express application is up and running on port 3001');
  })
  .catch(error => console.log('TypeORM connection error: ', error));

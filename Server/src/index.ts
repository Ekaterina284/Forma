import 'reflect-metadata';
const express = require('express');
const bodyParser = require('body-parser');
import { createConnection } from 'typeorm';
import { Film } from './entity/Film';
import { Category } from './entity/Category';
import * as cors from 'cors';
import { AppRoutes } from '../src/Router/routes';
import { Request, Response } from 'express';
//const app = express();
// app.use(cors());
// app.options('*', cors());
//app.use(bodyParser.json());
//app.use(require('./Router/routes'));
// createConnection()
//   .then(async connection => {
//     const film = new Film();
//     film.photo =
//       'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg';
//     film.name = 'Аватар';
//     film.year = '17.12.2009';
//     film.author = 'Джеймс Кэмерон';

//     await connection.manager.save(film);
//     // console.log('Saved a new user with id: ' + film.id);
//     const films = await connection.manager.find(Film);
//     //console.log('Loaded users: ', films);
//     app.get('/qwerty', (req, res) => {
//       res.send(films);
//     });
//     app.get('/qwerty/:id', (req, res) => {
//       res.send(categories);
//     });
//     app.post('/qwertyu', (req, res) => {
//       console.log(req.body);
//     });

//     const category = new Category();
//     category.category = 'Фэнтези';

//     await connection.manager.save(category);
//     // console.log('Saved a new user with id: ' + category.id);
//     const categories = await connection.manager.find(Category);
//     //console.log('Loaded users: ', categories);
//   })
//   .catch(error => console.log(error));

// app.listen(3001, () => console.log('listening on port 3001'));
createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(cors());
    app.options('*', cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
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

import { postCategory } from '../controller/postCategory';
import { filmGetAllAction } from '../controller/filmGetAllAction';
import { categoryGetAllAction } from '../controller/categoryGetAllAction';
import { postMovie } from '../controller/postMovie';
import { loginPost } from '../controller/registerPost';
import { loginGetAllAction } from '../controller/login';

export const AppRoutes = [
  {
    path: '/asd',
    method: 'get',
    action: categoryGetAllAction
  },
  {
    path: '/asd',
    method: 'post',
    action: postCategory
  },
  {
    path: '/catalog',
    method: 'get',
    action: filmGetAllAction
  },
  {
    path: '/qwerty',
    method: 'post',
    action: postMovie
  },

  {
    path: '/register',
    method: 'post',
    action: loginPost
  },
  {
    path: '/login',
    method: 'post',
    action: loginGetAllAction
  }
];

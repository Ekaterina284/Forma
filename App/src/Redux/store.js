import categoryReducer from './Category-reducer';
import movieReducer from './movies-reducer';

let store = {
  _state: {
    CategoryPage: {
      CategoryData: [
        {
          id: 1,
          category: 'Category'
        },
        {
          id: 2,
          category: 'Category1'
        },
        {
          id: 3,
          category: 'Category2'
        },
        {
          id: 4,
          category: 'Category3'
        }
      ],
      newPostText: ''
    },

    MoviesPage: {
      Movies: [
        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 1,
          name: 'Avatar:',
          year: 'Year:',
          author: 'Author:',
          Category: 'Category1'
        },
        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 2,
          name: 'Cimena:',
          year: 'Year:',
          author: 'Author:',
          Category: 'Category2'
        },
        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 3,
          name: 'Name:',
          year: 'Year:',
          author: 'Author:',
          Category: 'Category3'
        },
        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 2,
          name: 'Cimena:',
          year: 'Year:',
          author: 'Author:',
          Category: 'Category4'
        },
        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 3,
          name: 'Name:',
          year: 'Year:',
          author: 'Author:',
          Category: 'Category5'
        },

        {
          photo:
            'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
          id: 3,
          name: 'Name:',
          year: 'Year:',
          author: 'Author:'
        }
      ]
    }
  },
  _callSubscribe() {
    console.log('dfdsfsd');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    this._state.CategoryPage = categoryReducer(
      this._state.CategoryPage,
      action
    );
    this._state.MoviesPage = movieReducer(this._state.MoviesPage, action);

    this._callSubscribe(this._state);
  }
};

export default store;

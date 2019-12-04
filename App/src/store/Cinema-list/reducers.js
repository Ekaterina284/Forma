const ADD_CINEMA = 'ADD_CINEMA';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const LIST_ORIENTATION = 'LIST_ORIENTATION';
const GRID_ORIENTATION = 'GRID_ORIENTATION';
const initialState = {
  newCinemaText: '',
  viewCategory: '',
  orientation: 'LIST',
  orientation: 'GRID',
  movieData: [
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 1,
      name: 'Аватар',
      year: '17.12.2009',
      author: 'Джеймс Кэмерон',
      category: 'Фэнтези'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 2,
      name: 'Cimena:',
      year: 'Year:',
      author: 'Author:',
      category: 'Мультфильм'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 3,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      category: 'Комедия'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 4,
      name: 'Cimena:',
      year: 'Year:',
      author: 'Author:',
      category: 'Комедия'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 5,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      category: 'Фэнтези'
    },

    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 6,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      category: 'Фэнтези'
    }
  ]
};

const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CINEMA:
      return {
        ...state,
        movieData: [
          ...state.movieData,
          {
            id: state.movieData.length,
            photo: action.payload.newPhoto,
            name: action.payload.newName,
            year: action.payload.newYear,
            author: action.payload.newAuthor,
            category: action.payload.newCategory
          }
        ],
        newCinemaText: ''
      };

    case SELECT_CATEGORY:
      return { ...state, viewCategory: action.payload.newName };
    case LIST_ORIENTATION:
      return { ...state, orientation: 'LIST' };
    case GRID_ORIENTATION:
      return { ...state, orientation: 'GRID' };

    default:
      return state;
  }
};

export default CinemaReducer;

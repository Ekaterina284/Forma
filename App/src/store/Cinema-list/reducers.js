const ADD_CINEMA = 'ADD_CINEMA';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const LIST_ORIENTATION = 'LIST_ORIENTATION';
const GRID_ORIENTATION = 'GRID_ORIENTATION';
let initialState = {
  newCinemaText: '',
  viewCategory: '',
  orientation: 'LIST',
  orientation: 'GRID',
  MovieData: [
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 1,
      name: 'Аватар',
      year: '17.12.2009',
      author: 'Джеймс Кэмерон',
      Category: 'Фэнтези'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 2,
      name: 'Cimena:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Мультфильм'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 3,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Комедия'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 4,
      name: 'Cimena:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Комедия'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 5,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Фэнтези'
    },

    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 6,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Фэнтези'
    }
  ]
};

const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CINEMA:
      const newCinema = {
        id: state.MovieData.length,
        photo: action.newPhoto,
        name: action.newName,
        year: action.newYear,
        author: action.newAuthor,
        Category: action.NewCategory
      };
      const stateCopy = { ...state };
      stateCopy.MovieData = [...state.MovieData];
      stateCopy.MovieData.push(newCinema);
      stateCopy.newCinemaText = '';

      return stateCopy;
    case SELECT_CATEGORY:
      return { ...state, viewCategory: action.newName };
    case LIST_ORIENTATION:
      return { ...state, orientation: 'LIST' };
    case GRID_ORIENTATION:
      return { ...state, orientation: 'GRID' };

    default:
      return state;
  }
};

export default CinemaReducer;

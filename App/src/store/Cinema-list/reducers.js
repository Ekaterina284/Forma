const ADD_CINEMA = 'ADD_CINEMA';
// const ORIENTATION_GRID = ' ORIENTATION_GRID';
// const ORIENTATION_LIST = ' ORIENTATION_LIST';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
let initialState = {
  viewCategory: '',
  // opientation: '',
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
  ],
  newCinemaText: ''
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
    // case SELECT_CATEGORY:
    //   return action.newCategory;

    // case ORIENTATION_LIST:
    //   break;
    // case ORIENTATION_GRID:
    //   break;

    default:
      return state;
  }
};

export default CinemaReducer;

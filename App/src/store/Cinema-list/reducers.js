const ADD_CINEMA = 'ADD_CINEMA';
// const ORIENTATION_GRID = ' ORIENTATION_GRID';
// const ORIENTATION_LIST = ' ORIENTATION_LIST';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

let initialState = {
  MovieData: [
    // opientation: 'LIST',

    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 1,
      name: 'Avatar',
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
      Category: 'Category1'
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
      id: 4,
      name: 'Cimena:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Category4'
    },
    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 5,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Category6'
    },

    {
      photo:
        'http://school22-tmn.ru/uploads/posts/2016-02/1455513967_file39101521_82da39f0.jpg',
      id: 6,
      name: 'Name:',
      year: 'Year:',
      author: 'Author:',
      Category: 'Category6'
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
        author: action.newAuthor
      };
      const stateCopy = { ...state };
      stateCopy.MovieData = [...state.MovieData];
      stateCopy.MovieData.push(newCinema);
      stateCopy.newCinemaText = '';

      return stateCopy;
    case SELECT_CATEGORY:
      return action.newCategory;

    // case ORIENTATION_LIST:
    //   break;
    // case ORIENTATION_GRID:
    //   break;

    default:
      return state;
  }
};

export default CinemaReducer;

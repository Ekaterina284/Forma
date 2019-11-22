const ADD_POST = 'ADD_POST';
let initialState = {
  CategoryData: [
    {
      id: 1,
      category: 'Фэнтези'
    },
    {
      id: 2,
      category: ' Мультфильм'
    },
    {
      id: 3,
      category: 'Комедия'
    }
  ],
  newPostText: ''
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.CategoryData.lenght,
        category: action.newName
      };

      let stateCopy = { ...state };
      stateCopy.CategoryData = [...state.CategoryData];
      stateCopy.CategoryData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    default:
      return state;
  }
};

export default categoryReducer;

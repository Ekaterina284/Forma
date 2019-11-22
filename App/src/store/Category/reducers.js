const ADD_POST = 'ADD_POST';

let initialState = {
  CategoryData: [
    {
      id: 1,
      category: 'Category'
    },
    {
      id: 2,
      category: 'Фэнтези'
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
    case SELECT_CATEGORY:
      return action.newCategory;

    default:
      return state;
  }
};

export default categoryReducer;

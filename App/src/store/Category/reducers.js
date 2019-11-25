const ADD_POST = 'ADD_POST';
let initialState = {
  categoryData: [
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
      return {
        ...state,
        categoryData: [
          ...state.categoryData,
          { id: state.categoryData.lenght, category: action.newName }
        ],
        newPostText: ''
      };
    default:
      return state;
  }
};

export default categoryReducer;

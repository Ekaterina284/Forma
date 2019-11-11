const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
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
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        category: state.newPostText
      };
      state.CategoryData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addCategoryActionCreator = () => ({
  type: 'ADD-POST'
});
export const updateNewCategoryActionCreator = text => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: text
});
export default categoryReducer;

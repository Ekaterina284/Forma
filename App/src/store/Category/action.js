export const addCategoryActionCreator = text => ({
  type: 'ADD_POST',
  payload: {
    newName: text
  }
});
export const selectCategoryActionCreator = text => ({
  type: 'SELECT_CATEGORY',
  payload: {
    newName: text
  }
});

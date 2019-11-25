export const addCategoryActionCreator = text => ({
  type: 'ADD_POST',
  newName: text
});
export const selectCategoryActionCreator = text => ({
  type: 'SELECT_CATEGORY',
  newName: text
});

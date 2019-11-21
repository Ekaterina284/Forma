export const addCategoryActionCreator = text => ({
  type: 'ADD_POST',
  newName: text
});
export const SelectCategoryActionCreator = category => ({
  type: 'SELECT_CATEGORY',
  newCategory: category
});

// export const selectCinemaActionCreator = cinema => {
//   alert('Now cinema is', cinema.name);
//   return {
//     type: 'FILM_SELECTED',
//     payload: cinema
//   };
// };

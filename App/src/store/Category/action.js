export const addCategoryActionCreator = text => ({
  type: 'ADD_POST',
  newName: text
});
export const selectCategoryActionCreator = text => ({
  type: 'SELECT_CATEGORY',
  newName: text
});

// export const selectCinemaActionCreator = cinema => {
//   alert('Now cinema is', cinema.name);
//   return {
//     type: 'FILM_SELECTED',
//     payload: cinema
//   };
// };

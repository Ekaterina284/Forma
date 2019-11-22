export const addFilmActionCreator = ({
  photo,
  name,
  year,
  author,
  Category
}) => ({
  type: 'ADD_CINEMA',
  newPhoto: photo,
  newName: name,
  newYear: year,
  newAuthor: author,
  NewCategory: Category
});

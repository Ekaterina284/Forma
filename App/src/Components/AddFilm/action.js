export const addFilmActionCreator = ({
  photo,
  name,
  year,
  author,
  category
}) => ({
  type: 'ADD_CINEMA',
  newPhoto: photo,
  newName: name,
  newYear: year,
  newAuthor: author,
  newCategory: category
});

export const addFilmActionCreator = ({
  photo,
  name,
  year,
  author,
  category
}) => ({
  type: 'ADD_CINEMA',
  payload: {
    newPhoto: photo,
    newName: name,
    newYear: year,
    newAuthor: author,
    newCategory: category
  }
});

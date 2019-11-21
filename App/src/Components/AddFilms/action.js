export const addFilmActionCreator = ({ photo, name, year, author }) => ({
  type: 'ADD_CINEMA',
  newPhoto: photo,
  newName: name,
  newYear: year,
  newAuthor: author
});

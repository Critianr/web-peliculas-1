export default (state, action) => {
  switch (action.type) {
    // case "ADD_MOVIE_TO_WATCHLIST":
      case "ADD_LIST_PELICULA":
      return {
        ...state,
        listPeliculas: [action.payload, ...state.listPeliculas],
      };
    case "ELIMINAR_PELICULA":
      return {
        ...state,
        listPeliculas: state.listPeliculas.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
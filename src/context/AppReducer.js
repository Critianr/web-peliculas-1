export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        peliculasVistas: [action.payload, ...state.peliculasVistas],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        peliculasVistas: state.peliculasVistas.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        peliculasVistas: state.peliculasVistas.filter(
          (movie) => movie.id !== action.payload.id
        ),
        peliculasVistas: [action.payload, ...state.peliculasVistas],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        peliculasVistas: state.peliculasVistas.filter(
          (movie) => movie.id !== action.payload.id
        ),
        peliculasVistas: [action.payload, ...state.peliculasVistas],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

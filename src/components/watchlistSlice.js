const initialState = {
  movie: [],
};

export default function watchlistReducer(state = initialState, action) {
  let isMovieAlreadyAdded;
  switch (action.type) {
    case "addToWatchlist":
      isMovieAlreadyAdded = state.movie.some(
        (movie) => movie.poster === action.payload.poster
      );

      return {
        movie: isMovieAlreadyAdded
          ? state.movie
          : [...state.movie, action.payload],
      };
    case "removeWatchlist":
      return {
        ...state,
        movie: state.movie.filter((movie) => movie.poster !== action.payload),
      };
    default:
      return state;
  }
}

export function addToWatchlist(movie) {
  return {
    type: "addToWatchlist",
    payload: movie,
  };
}

export function removeWatchlist(movieId) {
  return {
    type: "removeWatchlist",
    payload: movieId,
  };
}

export const getWatchlist = (state) => state.watchlist.movie;

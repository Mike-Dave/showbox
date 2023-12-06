const initialState = {
  movie: [],
};

export default function favouriteReducer(state = initialState, action) {
  let isMovieAlreadyAdded;

  switch (action.type) {
    case "addToFavourite":
      isMovieAlreadyAdded = state.movie.some(
        (movie) => movie.poster === action.payload.poster
      );

      return {
        movie: isMovieAlreadyAdded
          ? state.movie
          : [...state.movie, action.payload],
      };
    case "removeFromFavourite":
      return {
        ...state,
        movie: state.movie.filter((movie) => movie.poster !== action.payload),
      };
    default:
      return state;
  }
}

export function addToFavourite(movie) {
  return {
    type: "addToFavourite",
    payload: movie,
  };
}

export function removeFromFavorites(movieId) {
  return {
    type: "removeFromFavourite",
    payload: movieId,
  };
}

// console.log(store.getStore());
export const getFavourite = (state) => state.favourite.movie;

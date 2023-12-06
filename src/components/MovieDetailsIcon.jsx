import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  getFavourite,
  removeFromFavorites,
} from "./favouriteSlice";
import {
  addToWatchlist,
  getWatchlist,
  removeWatchlist,
} from "./watchlistSlice";
import { useMovies } from "../contexts/MoviesContext";
import PlayButton from "./PlayButton";
import FavouriteButton from "./FavouriteButton";
import WatchlistButton from "./WatchlistButton";
import DetailsButtonContainer from "./DetailsButtonContainer";

function MovieDetailsIcon({ poster, title, year, id, movie }) {
  const { isBlur, setIsBlur, blurHandler } = useMovies();
  const dispatch = useDispatch();

  const favorites = useSelector(getFavourite);
  const watchlist = useSelector(getWatchlist);

  function isMovieInFavorites(movie) {
    return favorites.some((favMovie) => favMovie.poster === poster);
  }

  function handleToggleFavorite(movie) {
    if (isMovieInFavorites(movie)) {
      dispatch(removeFromFavorites(poster));
    } else {
      const newItem = {
        poster,
        title,
        year,
        isFavorite: false,
        id,
      };
      dispatch(addToFavourite(newItem));
    }
  }
  function isMovieInWatchlist(movie) {
    return watchlist.some((watchMov) => watchMov.poster === poster);
  }

  function handleToggleWatchlist() {
    if (isMovieInWatchlist(movie)) {
      dispatch(removeWatchlist(poster));
    } else {
      const newItem = {
        poster,
        title,
        year,
        isFavorite: false,
        id,
      };
      dispatch(addToWatchlist(newItem));
    }
  }

  return (
    <DetailsButtonContainer>
      <PlayButton
        isBlur={isBlur}
        setIsBlur={setIsBlur}
        blurHandler={blurHandler}
        title={title}
        id={id}
      />
      <FavouriteButton
        handleToggleFavorite={handleToggleFavorite}
        movie={movie}
        isMovieInFavorites={isMovieInFavorites}
      />
      <WatchlistButton
        handleToggleWatchlist={handleToggleWatchlist}
        movie={movie}
        isMovieInWatchlist={isMovieInWatchlist}
      />
    </DetailsButtonContainer>
  );
}
export default MovieDetailsIcon;

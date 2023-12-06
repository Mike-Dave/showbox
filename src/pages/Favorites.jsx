import { useSelector } from "react-redux";
import FavouriteAndWatchList from "../components/FavouriteAndWatchList";
import {
  getFavourite,
  removeFromFavorites,
} from "../components/favouriteSlice";
import AddedMoviesLayout from "../components/AddedMoviesLayout";

function Favorites() {
  const movie = useSelector(getFavourite);
  if (movie.length === 0)
    return (
      <h1 className="w-[19.375rem] md:w-full bg-white rounded-lg p-4 px-6">
        You have no media in your favourite
      </h1>
    );
  if (movie)
    return (
      <AddedMoviesLayout>
        {movie.map((favMovies) => (
          <FavouriteAndWatchList
            key={favMovies.title}
            favMovies={favMovies}
            action={removeFromFavorites(favMovies.poster)}
          />
        ))}
      </AddedMoviesLayout>
    );
}

export default Favorites;

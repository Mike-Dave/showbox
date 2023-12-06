import { useSelector } from "react-redux";
import FavouriteAndWatchList from "../components/FavouriteAndWatchList";
import { removeWatchlist, getWatchlist } from "../components/watchlistSlice";
import AddedMoviesLayout from "../components/AddedMoviesLayout";

function Watchlist() {
  const movie = useSelector(getWatchlist);

  if (movie.length === 0)
    return (
      <h1 className="w-[19.375rem] md:w-full bg-white rounded-lg p-4 px-6">
        You have no media in your watchlist
      </h1>
    );
  if (movie)
    return (
      <AddedMoviesLayout>
        {movie.map((favMovies) => (
          <FavouriteAndWatchList
            key={favMovies.title}
            favMovies={favMovies}
            action={removeWatchlist(favMovies.poster)}
          />
        ))}
      </AddedMoviesLayout>
    );
}

export default Watchlist;

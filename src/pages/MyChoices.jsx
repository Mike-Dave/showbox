import { Outlet, useLocation } from "react-router-dom";
import AppNav from "../components/MyChoiceLayout";
import { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";

function MyChoice() {
  const location = useLocation();
  const { setGenreList, setShowMovieSlider } = useMovies();
  useEffect(
    function () {
      setGenreList(false);
      setShowMovieSlider(false);
    },
    [location.pathname, setGenreList, setShowMovieSlider]
  );
  return (
    <div className="space-y-6 overflow-hidsden p-4">
      <h2 className="pt-4 font-bold text-[#ffb43a]">
        Discover Your Watchlist and Favorites!
      </h2>
      <div className="flex justify-center">
        <AppNav />
      </div>
      <Outlet />
    </div>
  );
}

export default MyChoice;

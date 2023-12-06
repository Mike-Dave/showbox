import { tvMovie } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function TvMovie() {
  return <InfiniteScrollMovies queryKey={["tvmovie"]} fetchFn={tvMovie} />;
}

export default TvMovie;

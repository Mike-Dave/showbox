
import { popular } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Popular() {

  return (
    <InfiniteScrollMovies queryKey={ ["popular"]} fetchFn={popular} />
  );
}

export default Popular;

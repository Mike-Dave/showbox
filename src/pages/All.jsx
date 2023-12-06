import { all } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function All() {
  return <InfiniteScrollMovies queryKey={["all"]} fetchFn={all} />;
}

export default All;

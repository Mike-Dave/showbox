import { trending } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Trending() {
  return <InfiniteScrollMovies queryKey={["trending"]} fetchFn={trending} />;
}

export default Trending;

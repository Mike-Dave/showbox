import { western } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Western() {
  return <InfiniteScrollMovies queryKey={["western"]} fetchFn={western} />;
}

export default Western;

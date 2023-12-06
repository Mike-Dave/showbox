import { horror } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Horror() {
  return <InfiniteScrollMovies queryKey={["horror"]} fetchFn={horror} />;
}

export default Horror;

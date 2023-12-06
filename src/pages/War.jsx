import { war } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function War() {
  return <InfiniteScrollMovies queryKey={["war"]} fetchFn={war} />;
}

export default War;

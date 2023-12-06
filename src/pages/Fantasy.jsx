import { fantansy } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Fantasy() {
  return <InfiniteScrollMovies queryKey={["fantasy"]} fetchFn={fantansy} />;
}

export default Fantasy;

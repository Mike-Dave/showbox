import { mystery } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Mystery() {
  return <InfiniteScrollMovies queryKey={["mystery"]} fetchFn={mystery} />;
}

export default Mystery;

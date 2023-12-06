import { drama } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Drama() {
  return <InfiniteScrollMovies queryKey={["drama"]} fetchFn={drama} />;
}
export default Drama;

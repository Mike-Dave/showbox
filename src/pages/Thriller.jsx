import { thriller } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";
function Thriller() {
  return <InfiniteScrollMovies queryKey={["thriller"]} fetchFn={thriller} />;
}

export default Thriller;

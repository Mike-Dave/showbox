import { scienceFiction } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function ScienceFiction() {
  return (
    <InfiniteScrollMovies
      queryKey={["sciencefiction"]}
      fetchFn={scienceFiction}
    />
  );
}

export default ScienceFiction;

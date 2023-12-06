import { romance } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Romance() {
  return <InfiniteScrollMovies queryKey={["romance"]} fetchFn={romance} />;
}

export default Romance;

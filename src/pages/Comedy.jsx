import { comedy } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Comedy() {
  return <InfiniteScrollMovies queryKey={["comedy"]} fetchFn={comedy} />;
}
export default Comedy;

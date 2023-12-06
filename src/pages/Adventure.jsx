import { adventure } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Adventure() {
  return <InfiniteScrollMovies queryKey={["adventure"]} fetchFn={adventure} />;
}
export default Adventure;

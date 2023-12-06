import { crime } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Crime() {
  return <InfiniteScrollMovies queryKey={["crime"]} fetchFn={crime} />;
}
export default Crime;

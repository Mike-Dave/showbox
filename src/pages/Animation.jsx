import { animation } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Animation() {
  return <InfiniteScrollMovies queryKey={["animation"]} fetchFn={animation} />;
}
export default Animation;

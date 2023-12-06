import { action } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Action() {
  return <InfiniteScrollMovies queryKey={["action"]} fetchFn={action} />;
}

export default Action;

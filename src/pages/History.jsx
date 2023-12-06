import { history } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function History() {
  return <InfiniteScrollMovies queryKey={["history"]} fetchFn={history} />;
}

export default History;

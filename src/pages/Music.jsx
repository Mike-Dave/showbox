import { music } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Music() {
  return <InfiniteScrollMovies queryKey={["music"]} fetchFn={music} />;
}

export default Music;

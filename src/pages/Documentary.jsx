import { documentary } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";

function Documentary() {
  return (
    <InfiniteScrollMovies queryKey={["documentary"]} fetchFn={documentary} />
  );
}
export default Documentary;

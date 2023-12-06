
import { family } from "../api/movie";
import InfiniteScrollMovies from "../components/InfiniteScrollMovies";


function Family() {
 

  return (
    <InfiniteScrollMovies queryKey={ ["family"]} fetchFn={family} />
  );
}
export default Family;

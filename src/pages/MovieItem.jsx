import { useQuery } from "@tanstack/react-query";
import MoviesList from "../components/MoviesList";
import MovieLayout from "../components/MovieLayout";
import { movies } from "../api/movie";
function MovieItem() {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: movies,
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <MovieLayout>
      {data?.map((movieData) => (
        <MoviesList movieData={movieData} key={movieData.id} />
      ))}
    </MovieLayout>
  );
}
export default MovieItem;

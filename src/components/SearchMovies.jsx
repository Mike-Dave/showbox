import { useQuery } from "@tanstack/react-query";
import { movieData } from "../api/movie";
import { useMovies } from "../contexts/MoviesContext";
import { Link } from "react-router-dom";
function takeFirstElement(elements) {
  return elements.split("-")[0];
}
function SearchMovies() {
  const { query, movieListRef, handleMovieListFocus } = useMovies();
  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => movieData(query),
    enabled: !!query,
  });

  return (
    <>
      {query && (
        <div
          className="absolute md:left-[13rem] left-[1rem] top-14 bg-whiteColor p-4 w-[20.625rem] space-y-3 opacity-80 max-h-[31.25rem] overflow-scroll"
          onClick={handleMovieListFocus}
          ref={movieListRef}
        >
          {data?.map((data) => {
            const { poster_path: poster, title, id, release_date: date } = data;
            return (
              <Link
                to={`/movies/${data.id}`}
                className="flex gap-4 hover:bg-gray-600 hover:text-whiteColor"
                key={id}
              >
                <img
                  className="w-[40px]"
                  src={`https://image.tmdb.org/t/p/w500/${poster}`}
                  alt=""
                />
                <div className="overflow-hidden">
                  <p>{title}</p>
                  <p className="font-bold text-sm">
                    . {takeFirstElement(date)}
                  </p>
                </div>
              </Link>
            );
          })}
          {data?.length === 0 && (
            <div>
              <p>Nothing found</p>
            </div>
          )}
          {isLoading && <p>Loading...</p>}
        </div>
      )}
    </>
  );
}
export default SearchMovies;

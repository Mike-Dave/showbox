import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieLayout from "../components/MovieLayout";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";
import LoadingDots from "../components/LoadingDots";
import { useMovies } from "../contexts/MoviesContext";
import ErrorMessage from "./ErrorMessage";

function InfiniteScrollMovies({ queryKey, fetchFn }) {
  const { setGenreList } = useMovies();
  useEffect(() => {
    setGenreList(true);
  }, [setGenreList]);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam }) => fetchFn(pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

  const options = { threshold: 1.0 };
  function callback([entry]) {
    if (entry.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }

  const dependencies = [fetchNextPage, hasNextPage];
  const observerRef = useIntersectionObserver(callback, options, dependencies);

  if (isLoading) return <LoadingDots />;

  if (isError) return <ErrorMessage />;

  return (
    <MovieLayout>
      {data?.pages.map((moviePage) =>
        moviePage?.results?.map((movieData) => (
          <MoviesList movieData={movieData} key={movieData.id} />
        ))
      )}

      <div ref={observerRef} className="loading-Position">
        <Loader />
      </div>
    </MovieLayout>
  );
}

export default InfiniteScrollMovies;

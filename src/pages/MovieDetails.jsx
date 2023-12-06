import { useLocation, useParams } from "react-router-dom";

import { movieInfo } from "../api/movie";
import { useQuery } from "@tanstack/react-query";
import MovieDetailsIcon from "../components/MovieDetailsIcon";
import { useMovies } from "../contexts/MoviesContext";
import { useEffect } from "react";
import LoadingDots from "../components/LoadingDots";
import ErrorMessage from "../components/ErrorMessage";
import DetailsOverview from "../components/DetailsOverview";
import DetailsDirector from "../components/DetailsDirector";
import DetailsRating from "../components/DetailsRating";
import DetailsGenreNames from "../components/DetailsGenreNames";
import GenreAndRatingContainer from "../components/GenreAndRatingContainer";
import TitleAndRuntime from "../components/TitleAndRuntime";
import DetailsImage from "../components/DetailsImage";
import MovieDetailsContainer from "../components/MovieDetailsContainer";
import MovieDetailsSubContainer from "../components/MovieDetailsSubContainer";

function MovieDetails() {
  const location = useLocation();

  const { setGenreList, setShowMovieSlider } = useMovies();
  useEffect(
    function () {
      setGenreList(false);
      setShowMovieSlider(false);
    },
    [location.pathname, setGenreList, setShowMovieSlider]
  );
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["moviedetails", id],
    queryFn: () => movieInfo(id),
    enabled: !!id,
  });
  const receivedData = data?.data1;
  const {
    title,
    poster_path: poster,
    release_date: year,
    first_air_date: airDate,
    overview,
    backdrop_path: path,
    vote_average: vote,
    id: movieID,
    runtime,
  } = receivedData || {};

  const directorName = data?.data2.crew.filter(
    ({ job }) => job === "Director"
  )[0].name;
  if (isLoading) return <LoadingDots />;
  if (isError) return <ErrorMessage />;

  const genreNames = receivedData.genres.map((genre) => genre.name);

  return (
    <MovieDetailsContainer>
      <DetailsImage path={path} />
      <MovieDetailsSubContainer>
        <TitleAndRuntime
          title={title}
          airDate={airDate}
          runtime={runtime}
          year={year}
        />
        <GenreAndRatingContainer>
          <DetailsGenreNames genreNames={genreNames} />
          <DetailsRating vote={vote} />
        </GenreAndRatingContainer>
        <MovieDetailsIcon
          poster={poster}
          title={title}
          year={year}
          id={movieID}
          movie={data?.data1}
        />
        <DetailsOverview overview={overview} />
        <DetailsDirector directorName={directorName} />
      </MovieDetailsSubContainer>
    </MovieDetailsContainer>
  );
}

export default MovieDetails;

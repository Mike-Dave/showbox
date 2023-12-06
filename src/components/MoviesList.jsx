import { Link, useLocation } from "react-router-dom";
import starIcon from "../images/star-icon.svg";
import { useMovies } from "../contexts/MoviesContext";
import { useEffect } from "react";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength).concat("...");
  }
  return str;
}

function takeFirstElement(firstElement) {
  return firstElement.split("-")[0];
}

function MovieList({ movieData }) {
  const location = useLocation();
  const {
    id,
    release_date: release,
    title,
    name,
    backdrop_path: path,
    vote_average: vote,
    first_air_date: airDate,
  } = movieData;
  const { setShowMovieSlider } = useMovies();
  useEffect(() => {
    setShowMovieSlider(true);
  }, [location.pathname, setShowMovieSlider]);
  return (
    <div className="relative font-poppins">
      <Link to={`/movies/${id}`}>
        <img
          className="rounded-lg w-[220px] h-[200px] md:h-[290px] object-cover opacity-60"
          src={`https://image.tmdb.org/t/p/w500/${path}`}
          alt=""
        />
        <div className="absolute bottom-0 text-whiteColor font-bold m-3">
          <h2> {truncateString(title ? `${title}` : `${name}`, 12)}</h2>
          <div className="flex gap-8 md:gap-20">
            <p className="text-[#B6B8B9s] text-[0.95rem]">
              {release
                ? takeFirstElement(`${release}`)
                : takeFirstElement(`${airDate}`)}
            </p>

            <div className="flex items-center gap-1 ">
              <picture className="w-[14px]">
                <img className="" src={starIcon} alt="star icon" />
              </picture>

              <p className=" text-[0.9rem] text-white">
                {Math.trunc(vote)}
                <span className="text-[0.7rem] ">/10</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieList;

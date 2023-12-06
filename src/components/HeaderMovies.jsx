import { Link } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContext";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength).concat("...");
  }
  return str;
}

function HeaderMovies({ movieData, testimonialRef }) {
  const { setIsBlur } = useMovies();
  const { poster_path: path, id, title, overview } = movieData;
  const backgroundImage = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${path}')`,
    backgroundSize: "cover",
    borderRadius: "10px",
  };
  return (
    <Link
      to={`/movies/${id}`}
      className="p-10 md:p-20 px-9 md:px-24 min-w-full w-full h-[18.75rem] md:h-auto"
      ref={testimonialRef}
      style={backgroundImage}
    >
      <h1 className="text-red-50 pb-3 text-2xl md:text-3xl">{title}</h1>
      <p className="text-red-50 max-w-2xl text-sm md:text-lg">
        {truncateString(overview, 150)}
      </p>
      <div className="mt-5 md:mt-7">
        <a
          className="text-yellow-950 no-underline bg-yellow-500 py-2 px-4 rounded-lg "
          onClick={() => setIsBlur(true)}
        >
          Watch Trailer
        </a>
      </div>
    </Link>
  );
}

export default HeaderMovies;

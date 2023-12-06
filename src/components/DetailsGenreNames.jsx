import { useNavigate } from "react-router-dom";

function DetailsGenreNames({ genreNames }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      {genreNames.map((genre, index) => (
        <p
          className="rounded-xl outline outline-goldenYellow px-2 text-poppins cursor-pointer "
          onClick={() => navigate(`/${genre}`)}
          key={index}
        >
          {genre}
        </p>
      ))}
    </div>
  );
}

export default DetailsGenreNames;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ellipsisIcon from "../images/ellipsis-icon.svg";
import { useState } from "react";
function takeFirstElement(firstElement) {
  return firstElement.split("-")[0];
}
function FavouriteAndWatchList({ favMovies, action }) {
  const { id, title, year, poster } = favMovies;
  const dispatch = useDispatch();
  const handleAction = () => {
    dispatch(action);
  };

  const [isClicked, setIsClicked] = useState(false);
  function handleBlur() {
    setIsClicked(true);
  }
  function clickHandler() {
    setIsClicked((clicked) => !clicked);
  }
  return (
    <div className="relative" onBlur={handleBlur}>
      <Link to={`/movies/${id}`}>
        <picture>
          <img
            className="rounded-lg w-[140px] h-[225.5px] object-cover opacity-60"
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt=""
          />
        </picture>
      </Link>
      <div className="absolute bottom-0 text-[#fcfeff] font-bold m-2 p-s1 flex flex-col ">
        <Link to={`/movies/${id}`}>
          <div>
            <h2 className="text-[0.8rem]">{title}</h2>
          </div>
        </Link>
        <div className="flex gap-14 items-center">
          <Link to={`/movies/${id}`}>
            <p className="text-[#B6B8B9s] text-[0.8rem]">
              {takeFirstElement(year)}
            </p>
          </Link>
          <div
            className="w-[25px] roundsed-[50%] outsline odutline-1 relative "
            onClick={clickHandler}
          >
            <img className="pd-2 m-" src={ellipsisIcon} alt="" />
            {isClicked && (
              <p
                className="absolute top-10 right-0 px-2 p-2 -sbottom-2 text-xs w-[120px] bg-charcoalGray text-whiteColor rounded-lg cursor-pointer"
                onClick={handleAction}
              >
                Remove from favourite
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteAndWatchList;

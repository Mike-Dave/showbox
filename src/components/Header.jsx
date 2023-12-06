import { useNavigate } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContext";
import menuIcon from "../images/menu-icon.svg";
import SearchBox from "./SearchBox";
import { DesktopMenuIcon } from "./DesktopMenuIcon";
import SearchMovies from "./SearchMovies";

function Header() {
  const { handleClicked, displayTitle, showMovieList } = useMovies();

  const navigate = useNavigate();

  return (
    <div className="flex bg-charcoalGray md:mt-3 md:rounded-lg sticky top-0 z-50 ">
      <div className="flex justisfy-center items-center ps-4 md:px-10 flex-1 ">
        {displayTitle && (
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-[1rem] text-orangeColor font-bold uppercase">
              Showbox
            </h1>
          </div>
        )}
        <SearchBox />
        {showMovieList && <SearchMovies />}
        {displayTitle && (
          <picture className="w-[1.875rem] sm:block md:hidden">
            <img src={menuIcon} alt="Menu Icon" onClick={handleClicked} />
          </picture>
        )}
      </div>
      <DesktopMenuIcon />
    </div>
  );
}

export default Header;

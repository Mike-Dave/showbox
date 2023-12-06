import { NavLink } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContext";

function DropdownMenu() {
  const { handleClicked } = useMovies();

  return (
    <nav>
      <ul className="bg-charcoalGray p-4 space-y-2" onClick={handleClicked}>
        <li>
          <NavLink to="/movieitem" className="text-whiteColor">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/tvshows" className="text-whiteColor">
            Tv Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/mychoices" className="text-orangeColor">
            My Choices
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DropdownMenu;

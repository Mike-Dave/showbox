import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="space-y-24 sticky top-[4.375rem] h-[43.75rem] overflow-scroll ">
      <ul className="text-white p-10 space-y-4 pt-6">
        <h1 className="font-bond text-4xl">Movies</h1>
        <li>
          <NavLink
            to="/trending"
            className="text-whiteColor hover:text-orangeColor"
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular" className="text-whiteColor ">
            Popular
          </NavLink>
        </li>
        <h1 className="font-bond text-4xl">Genres</h1>
        <li>
          <NavLink to="/all" className="text-whiteColor hover:text-orangeColor">
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/action"
            className="text-whiteColor hover:text-orangeColor"
          >
            Action
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adventure"
            className="text-whiteColor hover:text-orangeColor"
          >
            Adventure
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/animation"
            className="text-whiteColor hover:text-orangeColor"
          >
            Animation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comedy"
            className="text-whiteColor hover:text-orangeColor"
          >
            Comedy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crime"
            className="text-whiteColor hover:text-orangeColor"
          >
            Crime
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/documentary"
            className="text-whiteColor hover:text-orangeColor"
          >
            Documentary
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drama"
            className="text-whiteColor hover:text-orangeColor"
          >
            Drama
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/family"
            className="text-whiteColor hover:text-orangeColor"
          >
            Family
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fantasy"
            className="text-whiteColor hover:text-orangeColor"
          >
            Fantasy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className="text-whiteColor hover:text-orangeColor"
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/horror"
            className="text-whiteColor hover:text-orangeColor"
          >
            Horror
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className="text-whiteColor hover:text-orangeColor"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mystery"
            className="text-whiteColor hover:text-orangeColor"
          >
            Mystery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/romance"
            className="text-whiteColor hover:text-orangeColor"
          >
            Romance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sciencefiction"
            className="text-whiteColor hover:text-orangeColor"
          >
            Science Fiction
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tvmovie"
            className="text-whiteColor hover:text-orangeColor"
          >
            Tv Movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/thriller"
            className="text-whiteColor hover:text-orangeColor"
          >
            Thriller
          </NavLink>
        </li>
        <li>
          <NavLink to="/war" className="text-whiteColor hover:text-orangeColor">
            War
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/western"
            className="text-whiteColor hover:text-orangeColor"
          >
            Western
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;

import { NavLink } from "react-router-dom";
import styles from "./MyChoiceLayout.module.css";
function MyChoiceLayout() {
  return (
    <nav className={`${styles.nav}`}>
      <ul className="flex gap-8 justify-center items-cednter text-center rounded-lg bg-gunMetalGray mx-[30spx] w-[310px]  md:w-[640px] p-2 font-medium">
        <li className="mr-6 md:mr-20 text-whiteColor font-poppins">
          <NavLink to="watchlist">Watchlist</NavLink>
        </li>
        <li className="mr-6 md:mr-20 text-whiteColor font-poppins">
          <NavLink to="favourites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MyChoiceLayout;

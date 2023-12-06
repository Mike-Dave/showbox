import Header from "../components/Header";
import { useMovies } from "../contexts/MoviesContext";
import DropdownMenu from "../components/DropdownMenu";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import HeaderSlides from "./HeaderSlides";
import Navigation from "./Navigation";
function AppLayout() {
  const { isMenuClicked, genreList, showMovieSlider } = useMovies();

  return (
    <section className="container mx-auto font-poppins">
      <Header />
      {isMenuClicked && <DropdownMenu />}
      <div className="flex  p-4">
        <section className={`hidden md:block ${styles.nav}`}>
          {genreList ? <Navigation /> : ""}
        </section>
        <div className="w-full">
          {showMovieSlider && <HeaderSlides />}
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;

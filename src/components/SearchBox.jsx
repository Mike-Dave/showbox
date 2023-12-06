import { useEffect, useState } from "react";
import { useMovies } from "../contexts/MoviesContext";
import searchIcon from "../images/search-icon.svg";

function SearchBox() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(function () {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    function handleResize() {
      setIsMobile(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleResize);
  }, []);
  const {
    displayTitle,
    query,
    setQuery,
    displayMovieList,
    inputRef,
    handleInputFocus,
    handleMobileInputFocus,
  } = useMovies();
  function handleSubmit(e) {
    e.preventDefault();
    setQuery("");
  }
  return (
    <form
      className="flex justify-center items-center gap-2 rounded-[15px] pd-3 border m-3 bg-whiteColor md:ml-16"
      onSubmit={handleSubmit}
    >
      <div className="w-[20px] ml-3">
        <img src={searchIcon} alt="search icon" />
      </div>
      <input
        className={`py-s2 outline outline-transparent focus:outline-transparent rounded-lg ${
          isMobile
            ? displayTitle
              ? "w-full md:w-[300px]"
              : "w-[280px]"
            : "w-full md:w-[400px]"
        }`}
        ref={inputRef}
        placeholder="Find movies & TV"
        onClick={isMobile ? handleMobileInputFocus : handleInputFocus}
        onKeyUp={displayMovieList}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchBox;

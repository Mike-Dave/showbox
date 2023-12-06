import { createContext, useContext, useEffect, useRef, useState } from "react";

//  1) CREATE A NEW CONTEXT
const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [showMovieList, setShowMovieList] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(true);
  const [query, setQuery] = useState("");
  const [showMovieSlider, setShowMovieSlider] = useState(true);
  const inputRef = useRef(null);
  const movieListRef = useRef(null);

  useEffect(function () {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    function handleResize() {
      setDisplayTitle(true);
    }

    mediaQuery.addEventListener("change", handleResize);
  }, []);
  const [genreList, setGenreList] = useState(true);
  const [isBlur, setIsBlur] = useState(false);
  function blurHandler() {
    setIsBlur(false);
  }

  useEffect(function () {
    function clickedOutside(e) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        movieListRef.current &&
        !movieListRef.current.contains(e.target)
      ) {
        setShowMovieList(false);
        setDisplayTitle(true);
      }
    }
    // Add event listener for clicks on the document body
    document.body.addEventListener("click", clickedOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", clickedOutside);
    };
  }, []);
  function handleClicked() {
    setIsMenuClicked((clicked) => !clicked);
    console.log("mike");
  }

  function displayMovieList() {
    if (query === "") {
      setShowMovieList(false);
    } else {
      setShowMovieList(true);
    }
  }

  function handleInputFocus() {
    setShowMovieList(true);
  }
  function handleMobileInputFocus() {
    setShowMovieList(true);
    setDisplayTitle(false);
  }
  function handleMovieListFocus() {
    setShowMovieList(false);
    setGenreList(false);
    setQuery("");
  }
  //  2) PROVIDE VALUE TO CHILD COMPONENTS
  return (
    <MoviesContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
        handleClicked,
        displayTitle,
        setDisplayTitle,
        query,
        setQuery,
        displayMovieList,
        // displayGenreList,
        genreList,
        setGenreList,
        inputRef,
        movieListRef,
        showMovieList,
        handleInputFocus,
        handleMobileInputFocus,
        // handleInputBlur,
        handleMovieListFocus,
        showMovieSlider,
        setShowMovieSlider,
        isBlur,
        setIsBlur,
        blurHandler,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined)
    throw new Error("MoviesContext was used outside of the MoviesProvider");
  return context;
}

export { MoviesProvider, useMovies };

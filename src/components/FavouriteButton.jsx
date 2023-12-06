import bookmarkIcon from "../images/bookmark-icon.svg";
import unBookmarkIcon from "../images/unbookmark-icon.svg";
function FavouriteButton({ handleToggleFavorite, movie, isMovieInFavorites }) {
  return (
    <div
      className="w-[40px] rounded-[50%] outline outline-1 hover:outline-orangeColor"
      onClick={() => handleToggleFavorite(movie)}
    >
      {isMovieInFavorites(movie) ? (
        <img
          className="p-2 cursor-pointer"
          src={bookmarkIcon}
          alt="bookmark icon"
        />
      ) : (
        <img
          className="p-2 cursor-pointer"
          src={unBookmarkIcon}
          alt="bookmark-slash icon"
        />
      )}
    </div>
  );
}

export default FavouriteButton;

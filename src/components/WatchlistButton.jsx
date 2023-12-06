import eyeIcon from "../images/eye-icon.svg";
import slashedEyeIcon from "../images/eye-slashed-icon.svg";
function WatchlistButton({ handleToggleWatchlist, movie, isMovieInWatchlist }) {
  return (
    <div
      className="w-[40px] rounded-[50%] outline outline-1 hover:outline-orangeColor"
      onClick={() => handleToggleWatchlist(movie)}
    >
      {isMovieInWatchlist(movie) ? (
        <img className="p-2 cursor-pointer" src={eyeIcon} alt="eye icon" />
      ) : (
        <img
          className="p-2 cursor-pointer"
          src={slashedEyeIcon}
          alt="slashe eye icon"
        />
      )}
    </div>
  );
}

export default WatchlistButton;

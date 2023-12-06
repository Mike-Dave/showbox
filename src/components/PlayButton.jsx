import playIcon from "../images/play-icon.svg";
import VideoPlayer from "./VideoPlayer";
function PlayButton({ isBlur, setIsBlur, blurHandler, title, id }) {
  return (
    <div className="w-[40px] rounded-[50%] outline outline-1 relative hover:outline-orangeColor">
      <img
        className="p-2 cursor-pointer"
        src={playIcon}
        alt=""
        onClick={() => setIsBlur(true)}
      />
      {isBlur && (
        <VideoPlayer
          blurHandler={blurHandler}
          handleBlur={setIsBlur}
          title={title}
          id={id}
        />
      )}
    </div>
  );
}

export default PlayButton;

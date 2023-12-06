import starIcon from "../images/star-icon.svg";
function DetailsRating({ vote }) {
  return (
    <div className="flex items-center gap-1 ">
      <picture className="w-[18px]">
        <img className="" src={starIcon} alt="star icon" />
      </picture>
      <p className="text-[1rem] text-white">
        {Math.trunc(vote)}
        <span className="text-[0.9rem]">/10</span>
      </p>
    </div>
  );
}

export default DetailsRating;

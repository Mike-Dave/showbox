function DetailsImage({ path }) {
  return (
    <div className="bg-white mt-auto md:w-[18.75rem] md:h-[25rem]">
      <img
        className="md:w-[18.75rem] md:h-[25rem] w-full object-cover max-w-full"
        src={`https://image.tmdb.org/t/p/w500/${path}`}
        alt=""
      />
    </div>
  );
}

export default DetailsImage;

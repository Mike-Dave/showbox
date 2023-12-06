import { useQuery } from "@tanstack/react-query";
import { movieThriller } from "../api/movie";
import LoadingDots from "./LoadingDots";

function VideoPlayer({ blurHandler, handleBlur, title, id }) {
  const { data, isLoading } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => movieThriller(id),
    enabled: !!id,
  });
  const movieKey = data?.[0]?.key;

  return (
    <>
      <div className="overlay" onClick={blurHandler}></div>
      <div className="flex absolute z-10 -top-72 md:top-16 -left-1 md:left-10 p-5 bg-gunMetalGray flex-col gap-2 rounded-lg">
        <div className="flex text-whiteColor justify-between items-center">
          <p>{title}</p>

          <p
            className="text-2xl cursor-pointer"
            onClick={() => handleBlur(false)}
          >
            x
          </p>
        </div>
        {isLoading ? (
          <p className="w-[300px]">
            <LoadingDots />
          </p>
        ) : (
          <iframe
            className=" h-[21.875rem] w-[17.5rem] md:h-[18.75rem] md:w-[31.25rem] p-2 md:p-3"
            src={`https://www.youtube.com/embed/${movieKey}`}
            title="Embedded Content"
          ></iframe>
        )}
      </div>
    </>
  );
}
export default VideoPlayer;

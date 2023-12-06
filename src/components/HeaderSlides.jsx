import { useCallback, useEffect, useRef, useState } from "react";
import HeaderMovies from "./HeaderMovies";
import { useQuery } from "@tanstack/react-query";
import { movies } from "../api/movie";
import ErrorMessage from "./ErrorMessage";
import LoadingDots from "./LoadingDots";

function HeaderSlides() {
  const { data, isError, isLoading } = useQuery({
    queryKey: [movies],
    queryFn: movies,
  });
  const movieSlideData = data?.slice(0, 4);

  const testimonialsRef = useRef(null);
  const testimonialRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (currentIndex + 1) % testimonialsRef?.current?.children?.length
    );
  }, [currentIndex, setCurrentIndex, testimonialsRef]);

  function prevSlide() {
    setCurrentIndex(
      (currentIndex - 1 + testimonialsRef?.current?.children?.length) %
        testimonialsRef?.current?.children?.length
    );
  }
  useEffect(() => {
    if (data) {
      const testimonialWidth = testimonialRef?.current?.clientWidth;

      testimonialsRef.current.style.transform = `translateX(${
        -currentIndex * testimonialWidth
      }px)`;
    }
  }, [currentIndex, data]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  if (isError) return <ErrorMessage />;

  return (
    <>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <div className="mx-4 my-2 overflow-hidden relative rounded-lg">
          <div
            className="cursor-pointer left-2 md:left-10 absolute top-1/2 z-10 text-3xl text-whiteColor"
            onClick={() => prevSlide()}
          >
            <p>&lt;</p>
          </div>

          <div
            className={`flex transition-transform duration-500 ease-in-out`}
            ref={testimonialsRef}
          >
            {movieSlideData?.map((movieData) => (
              <HeaderMovies
                movieData={movieData}
                key={movieData.id}
                testimonialRef={testimonialRef}
                onNextSlide={nextSlide}
                onPrevSlide={prevSlide}
              />
            ))}
          </div>
          <div
            className="right-2 md:right-5 cursor-pointer absolute top-1/2 text-3xl text-whiteColor"
            onClick={() => nextSlide()}
          >
            <p> &gt;</p>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderSlides;

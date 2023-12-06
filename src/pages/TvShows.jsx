import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
import MoviesList from "../components/MoviesList";
import MovieLayout from "../components/MovieLayout";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUyNjg3YTExNzRhMGRhYWM3ODUxYWI0YTdkZDAzMCIsInN1YiI6IjY1NGQxNjk3Mjg2NmZhMTA4ZGMzZTNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DfEYDnbxHmN78CHi94hN0-2ulU-Ufs3gkXzRmFJOmjM",
  },
};
function TvShows() {
  const [data, setData] = useState([]);
  useEffect(function () {
    async function getTV() {
      try {
        const response = await fetch(
          `
        https://api.themoviedb.org/3/discover/tv`,
          options
        );
        if (!response.ok) {
          // Check for errors and handle them if the response is not okay
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data.results);
        // const movieId = data.results.id;
        // const response2 = await fetch(
        //   `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        //   options
        // );
        // const data2 = await response2.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getTV();
  }, []);
  return (
    <MovieLayout>
      {data?.map((movieData) => (
        <MoviesList movieData={movieData} key={movieData.id} />
      ))}
    </MovieLayout>
  );
}

export default TvShows;

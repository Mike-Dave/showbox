import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./contexts/MoviesContext";
import MovieItem from "./pages/MovieItem";
import AppLayout from "./components/AppLayout";
import TvShows from "./pages/TvShows";
import MyChoice from "./pages/MyChoices";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import Trending from "./pages/Trending";
import All from "./pages/All";
import Action from "./pages/Action";
import Adventure from "./pages/Adventure";
import Animation from "./pages/Animation";
import Comedy from "./pages/Comedy";
import Crime from "./pages/Crime";
import Documentary from "./pages/Documentary";
import Drama from "./pages/Drama";
import Family from "./pages/Family";
import Popular from "./pages/Popular";
import History from "./pages/History";
import Fantansy from "./pages/Fantasy";
import Horror from "./pages/Horror";
import Music from "./pages/Music";
import Mystery from "./pages/Mystery";
import Romance from "./pages/Romance";
import ScienceFiction from "./pages/ScienceFiction";
import TvMovie from "./pages/TvMovie";
import Thriller from "./pages/Thriller";
import War from "./pages/War";
import Western from "./pages/Western";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 } },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="trending" />} />
              <Route path="trending" element={<Trending />} />
              <Route path="popular" element={<Popular />} />
              <Route path="all" element={<All />} />
              <Route path="action" element={<Action />} />
              <Route path="adventure" element={<Adventure />} />
              <Route path="animation" element={<Animation />} />
              <Route path="comedy" element={<Comedy />} />
              <Route path="crime" element={<Crime />} />
              <Route path="documentary" element={<Documentary />} />
              <Route path="drama" element={<Drama />} />
              <Route path="family" element={<Family />} />
              <Route path="fantasy" element={<Fantansy />} />
              <Route path="history" element={<History />} />
              <Route path="horror" element={<Horror />} />
              <Route path="music" element={<Music />} />
              <Route path="mystery" element={<Mystery />} />
              <Route path="romance" element={<Romance />} />
              <Route path="sciencefiction" element={<ScienceFiction />} />
              <Route path="tvmovie" element={<TvMovie />} />
              <Route path="thriller" element={<Thriller />} />
              <Route path="war" element={<War />} />
              <Route path="western" element={<Western />} />
              <Route path="movieitem" element={<MovieItem />} />
              <Route path="movies/:id" element={<MovieDetails />} />
              <Route path="tvshows" element={<TvShows />} />
              <Route path="mychoices" element={<MyChoice />}>
                <Route index element={<Navigate replace to="watchlist" />} />
                <Route path="watchlist" element={<Watchlist />} />
                <Route path="favourites" element={<Favorites />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;

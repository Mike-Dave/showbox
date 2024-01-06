import { combineReducers, createStore } from "redux";
import watchlistReducer from "./components/watchlistSlice";
import favouriteReducer from "./components/favouriteSlice";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  watchlist: watchlistReducer,
});

const store = createStore(rootReducer);

export default store;

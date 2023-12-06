// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user/userSlice";
// import cartReducer from "./features/cart/cartSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     cart: cartReducer,
//   },
// });

// export default store;

import { combineReducers, createStore } from "redux";
import watchlistReducer from "./components/watchlistSlice";
import favouriteReducer from "./components/favouriteSlice";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  watchlist: watchlistReducer,
});

const store = createStore(rootReducer);

export default store;

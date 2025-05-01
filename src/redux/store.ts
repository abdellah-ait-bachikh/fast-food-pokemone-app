import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slace/appSlice";
import { homeReducer } from "./slace/homeSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    home:homeReducer
  },
});

export default store;

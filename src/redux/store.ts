import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slace/appSlice";
import { homeReducer } from "./slace/homeSlice";
import { DayReducer } from "./slace/daySlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    home:homeReducer,
    day:DayReducer
  },
});

export default store;

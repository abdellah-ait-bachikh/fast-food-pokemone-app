import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slace/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;

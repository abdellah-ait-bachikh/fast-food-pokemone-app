import { TinitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TinitialState = {
  isAsideOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAsideOpen(state, action: PayloadAction<boolean>) {
      state.isAsideOpen = action.payload;
    },
  },
});

export const addActions = appSlice.actions;
export const appReducer = appSlice.reducer;

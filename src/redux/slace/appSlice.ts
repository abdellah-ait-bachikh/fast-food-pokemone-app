import { TinitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TinitialState = {
  isAsideOpen: false,
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAsideOpen(state, action: PayloadAction<boolean>) {
      state.isAsideOpen = action.payload;
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const { setAsideOpen,setTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;

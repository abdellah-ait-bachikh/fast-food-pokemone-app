import { TdayInitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TdayInitialState = {
  currentDay: null,
  error: null,
  days: [],pagination:null
};
const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setCurrentDay(
      state,
      Action: PayloadAction<TdayInitialState["currentDay"]>
    ) {
      state.currentDay = Action.payload;
    },
    setError(state, action: PayloadAction<TdayInitialState["error"]>) {
      state.error = action.payload;
    },
    setDays(state, action: PayloadAction<TdayInitialState>) {
      state.days = action.payload.days;
      state.pagination = action.payload.pagination;

    },
  },
});

export const { setCurrentDay, setError,setDays } = daySlice.actions;
export const DayReducer = daySlice.reducer;

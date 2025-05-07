import { TdayInitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TdayInitialState = {
  currentDay: null,
  error: null,
  days: [],
  pagination: null,
  showDay: null,
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
    setShowDay(state, action: PayloadAction<TdayInitialState["showDay"]>) {
      state.showDay = action.payload;
    },
  },
});

export const { setCurrentDay, setError, setDays, setShowDay } =
  daySlice.actions;
export const DayReducer = daySlice.reducer;

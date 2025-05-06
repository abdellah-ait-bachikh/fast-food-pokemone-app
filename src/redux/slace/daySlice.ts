import { TdayInitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TdayInitialState = {
  currentDay: null,
  error: null,
  days: [],
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
    setDays(state, action: PayloadAction<TdayInitialState["days"]>) {
      state.days = action.payload;
    },
  },
});

export const { setCurrentDay, setError,setDays } = daySlice.actions;
export const DayReducer = daySlice.reducer;

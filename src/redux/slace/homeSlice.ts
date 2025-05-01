import { ThomeInitialState } from "@/type/statesTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThomeInitialState = {
  dashboardSummary: null,
  error: null,
  rankingProductsData: null,
};

const homeSLice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setDashboardSummary(
      state,
      action: PayloadAction<ThomeInitialState["dashboardSummary"]>
    ) {
      state.dashboardSummary = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setRankingProductsData(
      state,
      action: PayloadAction<ThomeInitialState["rankingProductsData"]>
    ) {
      state.rankingProductsData = action.payload;
    },
  },
});

export const { setDashboardSummary, setError,setRankingProductsData } = homeSLice.actions;
export const homeReducer = homeSLice.reducer;

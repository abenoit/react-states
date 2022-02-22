import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = Trip | null;

const selectTripReducer = (_state: State, action: PayloadAction<Trip>) =>
  action.payload;

const selectTripSlice = createSlice({
  name: "selectedTrip",
  initialState: null as State,
  reducers: {
    selectTrip: selectTripReducer,
    unselectTrip: () => null,
  },
});

export const { selectTrip, unselectTrip } = selectTripSlice.actions;
export default selectTripSlice.reducer;

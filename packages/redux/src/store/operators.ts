import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTrips } from "./trips";

type State = Operators;

const fetchOperatorsReducer = (_state: any, action: PayloadAction<DataSet>) =>
  action.payload.operators;

const operatorsSlice = createSlice({
  name: "operators",
  initialState: [] as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, fetchOperatorsReducer);
  },
});

export default operatorsSlice.reducer;

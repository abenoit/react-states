import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

type State = Trips | null;

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () =>
  api.fetchTrips()
);

const fetchTripsReducer = (state: State, action: PayloadAction<DataSet>) => ({
  ...state,
  ...action.payload.trips,
});

const tripsSlice = createSlice({
  name: "trips",
  initialState: null as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, fetchTripsReducer);
  },
});

export default tripsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTrips } from "./trips";

type State = Locations;

const fetchLocationsReducer = (_state: any, action: PayloadAction<DataSet>) =>
  action.payload.locations;

const locationsSlice = createSlice({
  name: "locations",
  initialState: [] as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, fetchLocationsReducer);
  },
});

export default locationsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import trips from "../store/trips";
import selectedTrip from "../store/selectedTrip";
import operators from "../store/operators";
import locations from "../store/locations";

export const store = configureStore({
  reducer: { trips, locations, operators, selectedTrip },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

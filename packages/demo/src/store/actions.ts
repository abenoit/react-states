import { TRIPS_FETCHED, SELECT_TRIP } from "./action-types";

export const tripsFetched = (dataSet: DataSet) => ({
  type: TRIPS_FETCHED,
  payload: dataSet,
});

export const selectTrip = (trip: Trip) => ({
  type: SELECT_TRIP,
  payload: trip,
});

export const unSelectTrip = () => ({
  type: SELECT_TRIP,
  payload: null,
});

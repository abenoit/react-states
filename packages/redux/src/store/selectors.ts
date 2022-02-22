import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const getOperators = (state: RootState) => state.operators;
const getLocations = (state: RootState) => state.locations;

export const getTripById = (state: RootState, tripId: TripId) =>
  // @ts-ignore
  state.trips && state.trips[tripId];

export const getLocationByTripId = createSelector(
  [getLocations, getTripById],
  (locations, trip) => ({
    departure: locations.find((loc) => loc.id === trip.origin_location_id),
    arrival: locations.find((loc) => loc.id === trip.destination_location_id),
  })
);

export const getOperatorByTripId = createSelector(
  [getOperators, getTripById],
  (operators, trip) =>
    operators.find((operator) => operator.id === trip.operator_id)
);

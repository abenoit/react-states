import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const getTrips = (state: RootState) => state.trips.trips;
const getOperators = (state: RootState) => state.operators;
const getLocations = (state: RootState) => state.locations;
const getTripId = (_state: RootState, tripId: TripId) => tripId;

export const getTripById = createSelector(
  [getTrips, getTripId],
  // @ts-ignore
  (trips, tripId) => trips && trips[tripId]
);

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

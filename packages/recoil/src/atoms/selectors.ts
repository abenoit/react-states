import { selector, selectorFamily } from "recoil";
import {
  operatorsState,
  selectedTripState,
  tripsState,
  locationsState,
} from ".";

export const tripByIdState = selectorFamily<Trip, TripId>({
  key: "tripByIdState",
  get:
    (tripId: TripId) =>
    ({ get }) =>
      // @ts-ignore
      get(tripsState)[tripId],
});

export const isTripSelected = selectorFamily<boolean, TripId>({
  key: "isTripSelected",
  get:
    (tripId: TripId) =>
    ({ get }) => {
      const selectedTripId = get(selectedTripState);
      return selectedTripId === tripId;
    },
});

export const selectedTripDataState = selector<Trip | null>({
  key: "selectedTripDataState",
  get: ({ get }) => {
    const trips = get(tripsState);
    const selectedTripId = get(selectedTripState);
    // @ts-ignore
    return trips[selectedTripId];
  },
  set: ({ set }) => {
    set(selectedTripState, null);
  },
});

export const tripOperatorState = selector({
  key: "tripOperatorState",
  get: ({ get }) => {
    const selectedTripId = get(selectedTripState);
    const trips = get(tripsState);
    const operators = get(operatorsState);

    // @ts-ignore
    const selectedTrip: Trip = trips[selectedTripId];
    if (!selectedTrip) return null;

    const operatorId = selectedTrip.operator_id;
    return operators.find((operator) => operator.id === operatorId);
  },
});

export const tripLocationsState = selector({
  key: "tripLocationsState",
  get: ({ get }) => {
    const selectedTripId = get(selectedTripState);
    const trips = get(tripsState);
    const locations = get(locationsState);
    // @ts-ignore
    const selectedTrip: Trip = trips[selectedTripId];
    if (!selectedTrip) return null;
    const departureLocationId = selectedTrip.origin_location_id;
    const arrivalLocationId = selectedTrip.destination_location_id;
    return {
      origin: locations.find((location) => location.id === departureLocationId),
      destination: locations.find(
        (location) => location.id === arrivalLocationId
      ),
    };
  },
});

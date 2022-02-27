import { selector, selectorFamily } from "recoil";
import { selectedTripState } from ".";
import { fetchTrips } from "../api";

const tripsQuery = selector({
  key: "DataSet",
  get: async ({ get }) => {
    // Faking server latency
    await new Promise((r) => setTimeout(r, 1000));
    const dataset = await fetchTrips();
    return dataset;
  },
});

export const trips = selector({
  key: "trips",
  get: ({ get }) => get(tripsQuery).trips,
});
export const operators = selector({
  key: "operators",
  get: ({ get }) => get(tripsQuery).operators,
});
export const locations = selector({
  key: "locations",
  get: ({ get }) => get(tripsQuery).locations,
});

export const operatorFromTripId = selectorFamily<any, TripId>({
  key: "operatorFromTripId",
  get:
    (tripId: TripId) =>
    ({ get }) => {
      const operatorId = get(tripByIdState(tripId))?.operator_id;
      return get(operators).find((operator) => operator.id === operatorId);
    },
});

export const tripByIdState = selectorFamily<Trip, TripId>({
  key: "tripByIdState",
  get:
    (tripId: TripId) =>
    ({ get }) =>
      // @ts-ignore
      get(trips)[tripId],
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
    const selectedTripId = get(selectedTripState);
    // @ts-ignore
    return get(trips)[selectedTripId];
  },
  set: ({ set }) => {
    set(selectedTripState, null);
  },
});

export const selectedTripOperatorState = selector({
  key: "tripOperatorState",
  get: ({ get }) => {
    const selectedTripId = get(selectedTripState);

    // @ts-ignore
    if (!selectedTripId) return null;

    return get(operatorFromTripId(selectedTripId));
  },
});

export const tripLocationsState = selector({
  key: "tripLocationsState",
  get: ({ get }) => {
    const selectedTrip = get(selectedTripDataState);
    const allLocations = get(locations);

    // @ts-ignore
    if (!selectedTrip) return null;

    const departureLocationId = selectedTrip.origin_location_id;
    const arrivalLocationId = selectedTrip.destination_location_id;
    return {
      origin: allLocations.find(
        (location) => location.id === departureLocationId
      ),
      destination: allLocations.find(
        (location) => location.id === arrivalLocationId
      ),
    };
  },
});
